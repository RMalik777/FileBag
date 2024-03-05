<?php

namespace App\Http\Controllers;

use App\Models\FileDetail;
use App\Models\FileHeader;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class PageController extends Controller
{
  public function index()
  {
    $fileHeader = FileHeader::all();
    $fileDetail = FileDetail::all();

    return Inertia::render('Index', [
      'fileHeader' => $fileHeader,
      'fileDetail' => $fileDetail,
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
}
