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
    // $searchword = $request->searchword;
    // if(strlen($searchword)){
    //   // $fileDetail = FileDetail::where('file_name','like','%'. $searchword .'%');
    //   // $fileHeader = FileHeader::where('file_detail_id');
    //   // $fileHeader = $fileDetail->fileHeader();
    //   // if($fileDetail){
    //   // }
    //   // else{
    //   //   $fileHeader = FileHeader::all();
    //   // }
    // }
    // else{  
    //   $fileDetail = FileDetail::all();
    //   // $fileDetail = FileDetail::all();
    //   // $category = Category::all();
    //   // $users = User::all();
    // }
    // $fileHeader = FileHeader::all();
    // $category = Category::all();
    // $users = User::all();
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
      ]);
    }
    else{
      return Inertia::render('Login', [
        'csrf_token' => csrf_token()
      ]);
    }
  }
  public function upload()
  {
    return Inertia::render('Upload');
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
