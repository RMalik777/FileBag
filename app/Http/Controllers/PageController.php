<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class PageController extends Controller
{
  public function index()
  {
      return Inertia::render('Index');
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
