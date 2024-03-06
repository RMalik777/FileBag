<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\UserLoginController;
use Illuminate\Support\Facades\Route;
use PhpParser\Node\Stmt\Return_;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [PageController::class, 'index']);
Route::get('/upload', [PageController::class, 'upload']);
Route::get('/login', [PageController::class, 'login']);
Route::post('/login', [UserLoginController::class, 'store']);
Route::get('/PopVersioning', [PageController::class, 'PopVersioning']);
Route::get('/logout', [UserloginController::class, 'logout']);
Route::post('/upload', [UploadController::class, 'upload'])->name('upload');
