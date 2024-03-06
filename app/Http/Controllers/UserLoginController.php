<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class EmployeeController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    //
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $request->validate([
      'username' => 'required',
      'password' => 'required',
    ], [
      'username.required' => 'Please Fill Username!',
      'password.required' => 'Please Fill Password!',
    ]);
    $credentials = $request->validate([
      'username' => ['required'],
      'password' => ['required'],
    ], [
      'username.required' => 'Please Fill Username!',
      'password.required' => 'Please Fill Password!',
    ]);
    $data = [
      'username' => $request->username,
      'password' => $request->password,
    ];
    if (Auth::attempt($credentials)) {
      $request->session()->regenerate();
      return redirect()->intended('/');
    }
    // employee::create($data);
    return back()->with('error', 'Invalid Credentials.');
  }
  public function logout(Request $request)
  {
    Auth::logout();

    $request->session()->invalidate();
    $request->session()->regenerate();

    return redirect('/login')->with('success', 'Berhasil keluar.');
  }

  /**
   * Display the specified resource.
   */
  public function show(User $user)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(User $user)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, User $user)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(User $user)
  {
    //
  }
}
