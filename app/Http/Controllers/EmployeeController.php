<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
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
        Session::flash('username', $request->username);
        Session::flash('password', $request->password);
        $request->validate([
            'username' => 'required',
            'password' => 'required|numeric',
        ],[
            'username.required' => 'username must be filled!',
            'password.required' => 'password must be filled!',
            'password.numeric' => 'password must contains numerical!',
        ]);
        $data = [
            'username' => $request->username,
            'password' => $request->password,
        ];
        employee::create($data);
        return redirect()->to('/')->with('successfuly login!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        //
    }
}
