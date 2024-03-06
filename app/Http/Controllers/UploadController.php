<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\FileDetail;
use Illuminate\Http\Request;
use App\Models\FileHeader;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'category' => 'required',
            'targetfile' => 'required',
        ]);
        $user = $request->user();
        $targetcategory = Category::find($request->category);
        $version = FileHeader::where('category_id', $targetcategory->id)->max('version');
        $nextversion = $version + 1;
        $fileSize = $request->file('targetfile')->getSize();
        $detail = FileDetail::create([
          'file_name' => $request->title,
          'file_size' => $fileSize,
          'file_path' => "./files/$request->title",
        ]);
        FileHeader::create([
          'version' => $nextversion,
          'file_date' => now(),
          'file_detail_id' => $detail->id,
          'user_id' => $user->id,
          'category_id' => $targetcategory->id,
        ]);
        return back()->with('success', 'File uploaded successfully.');
    }
}
