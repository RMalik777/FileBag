<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\FileDetail;
use Illuminate\Http\Request;
use App\Models\FileHeader;
use Illuminate\Support\Facades\Storage;

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
    $tostore = $request->file('targetfile');
    $version = FileHeader::where('category_id', $targetcategory->id)->max('version');
    $nextversion = $version + 1;
    $fileSize = $request->file('targetfile')->getSize();
    // Storage::disk('local')->put($tostore, 'Contents');
    $fileName = $request->title . '.pdf';
    $path = Storage::disk('local')->putFileAs(
      'public', // This is the directory under 'storage/app'
      $request->file('targetfile'),
      $fileName
    );
    $detail = FileDetail::create([
      'file_name' => $request->title,
      'file_size' => $fileSize,
      'file_path' => "./files/$request->title.pdf",
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
