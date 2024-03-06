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
use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;

class PageController extends Controller
{
  public function index(Request $request)
  {
    //php artisan migrate:fresh --seed

    Paginator::useBootstrap();

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
    return Inertia::render('Login');
  }
  public function PopVersioning()
  {
    return Inertia::render('PopVersioning');
  }
}
