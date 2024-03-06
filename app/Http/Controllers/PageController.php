<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\FileDetail;
use App\Models\FileHeader;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
use Throwable;

class PageController extends Controller
{
  public function index()
  {
    $fileHeader = FileHeader::all();
    $fileDetail = FileDetail::all();
    $category = Category::all();
    $users = User::all();

    return Inertia::render('Index', [
      'fileHeader' => $fileHeader,
      'fileDetail' => $fileDetail,
      'category' => $category,
      'users' => $users,
    ]);
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
}
