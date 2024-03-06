<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\File;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'file' => 'required|file|mimes:pdf|max:3072',
        ]);

        if ($request->file('file')->isValid()) {
            $path = $request->file('file')->storeAs(
                'pdfs',
                $request->file('file')->getClientOriginalName()
            );

            File::create([
                'title' => $request->input('title'),
                'file_name' => $request->file('file')->getClientOriginalName(),
            ]);

            return redirect()->back()->with('success', 'File uploaded and saved successfully.');
        } else {

            return redirect()->back()->withErrors(['file' => 'File upload failed.']);
        }
    }
}
