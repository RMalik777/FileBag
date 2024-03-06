<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\File;
use App\Models\FileHeader;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'file' => 'required|file|mimes:pdf|max:3072',
        ]);

        if ($request->file('file')->isValid()) {
            $path = $request->file('file')->store(
                'pdfs',
                'public'
            );

            // Get the maximum version number currently in the database
            $maxVersion = FileHeader::max('version') ?? 0;
            $nextVersion = $maxVersion + 1;

            // Create a new record in the database for the uploaded file
            $file = FileHeader::create([
                'title' => $request->input('title'),
                'file_name' => $request->file('file')->getClientOriginalName(),
                'file_path' => $path,
            ]);

            if ($file) {
                // Create a new record in the file headers table with the incremented version number
                FileHeader::create([
                    'version' => $nextVersion,
                    'file_id' => $file->id,
                ]);

                return redirect()->back()->with('success', 'File uploaded and saved successfully.');
            } else {
                return redirect()->back()->withErrors(['file' => 'Failed to save file details to the database.']);
            }
        } else {
            return redirect()->back()->withErrors(['file' => 'File upload failed.']);
        }
    }
}
