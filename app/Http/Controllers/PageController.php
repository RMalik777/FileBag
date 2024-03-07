<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\FileDetail;
use App\Models\FileHeader;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
use Throwable;

class PageController extends Controller
{
  public function index(Request $request)
  {
    $searchword = $request->searchword;
    if (strlen($searchword)) {
      $fileDetail = FileDetail::where('file_name', 'like', '%' . $searchword . '%')->get();
      if ($fileDetail) {
        $fileHeaderIds = $fileDetail->pluck('id');
        $fileHeaderShow = FileHeader::whereIn('file_detail_id', $fileHeaderIds)->get();
      } else {
        $fileHeaderShow = FileHeader::all();
      }
    } else {
      $fileHeaderShow = FileHeader::all();
    }
    $fileHeader = FileHeader::all();
    $fileDetail = FileDetail::all();
    $category = Category::all();
    $users = User::all();
    $data = $result = DB::table(DB::raw('(SELECT fh.*, ROW_NUMBER() OVER (PARTITION BY fh.category_id ORDER BY fh.version DESC) AS rn FROM file_headers fh) as rc'))
      ->select('rc.id', 'rc.version', 'rc.file_date', 'rc.category_id', 'rc.user_id', 'u.username', 'c.category_name', 'fd.file_name', 'fd.file_path')
      ->join('categories as c', 'rc.category_id', '=', 'c.id')
      ->join('file_details as fd', 'rc.file_detail_id', '=', 'fd.id')
      ->join('users as u', 'rc.user_id', '=', 'u.id')
      ->where('rc.rn', 1)
      ->get();

    if (Auth::user()) {
      return Inertia::render('Index', [
        'fileHeader' => $fileHeader,
        'fileDetail' => $fileDetail,
        'category' => $category,
        'users' => $users,
        'show' => $fileHeaderShow,
        'data' => $data,
      ]);
    } else {
      return redirect('/login');
    }
  }
  public function upload()
  {
    $category = Category::all();
    if (Auth::user()) {
      return Inertia::render('Upload', [
        'csrf_token' => csrf_token(),
        'category' => $category,
      ]);
    } else {
      return redirect('/login');
    }
  }
  public function update($id)
  {
    $category = Category::all();
    $fileHeader = FileHeader::find($id);
    $categoryid = $fileHeader->category_id;
    if (Auth::user()) {
      return Inertia::render('Update', [
        'csrf_token' => csrf_token(),
        'category' => $category,
        'id' => $categoryid,
      ]);
    } else {
      return redirect('/login');
    }
  }
  public function login()
  {
    return Inertia::render('Login', [
      'csrf_token' => csrf_token()
    ]);
  }
  public function PopVersioning($id)
  {
    if (!Auth::check()) {
      return response()->json(['error' => 'Unauthorized'], 401);
    }
    $fileHeader = FileHeader::find($id);
    $categoryid = $fileHeader->category_id;
    $result = DB::table('file_headers')
      ->select('file_headers.file_date', 'file_headers.version', 'file_headers.user_id', 'file_details.file_path')
      ->join('file_details', 'file_headers.file_detail_id', '=', 'file_details.id')
      ->where('file_headers.category_id', '=', $categoryid)
      ->orderBy('file_headers.version', 'desc')
      ->get();

    return Inertia::render('PopVersioning', [
      'result' => $result,
      'id' => $id,
      'categoryid' => $categoryid,
    ]);
  }
}
