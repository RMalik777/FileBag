<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\FileDetail;
use App\Models\FileHeader;
use App\Models\User;
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
    if(strlen($searchword)){
      $fileDetail = FileDetail::where('file_name','like','%'. $searchword .'%')->get();
      if($fileDetail){
        $fileHeaderIds = $fileDetail->pluck('id');
        $fileHeaderShow = FileHeader::whereIn('file_detail_id', $fileHeaderIds)->get();
      }
      else{
        $fileHeaderShow = FileHeader::all()->get();
      }
    }
    else{
      $fileHeaderShow = FileHeader::all();  
    }
    $fileHeader = FileHeader::all();
    $fileDetail = FileDetail::all();
    $category = Category::all();
    $users = User::all();
        
    if (Auth::user()){
      return Inertia::render('Index', [
        'fileHeader' => $fileHeader,
        'fileDetail' => $fileDetail,
        'category' => $category,
        'users' => $users,
        'show' => $fileHeaderShow
      ]);
    }
    else{
      return redirect('/login');
    }
  }
  public function upload()
  {
    $category = Category::all();
    return Inertia::render('Upload', [
      'csrf_token' => csrf_token(),
      'category' => $category,
    ]);
  }
  public function login()
  {
    return Inertia::render('Login', [
      'csrf_token' => csrf_token()
    ]);
  }
  public function PopVersioning()
  {
    return Inertia::render('PopVersioning');
  }
}
