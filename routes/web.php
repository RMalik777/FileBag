<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\PageController;
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
Route::post('/login', [EmployeeController::class, 'store']);
