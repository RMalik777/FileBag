<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

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
