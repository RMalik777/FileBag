<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\File; // Ensure this uses your actual model
use Illuminate\Support\Facades\Auth;

class VersionHistoryController extends Controller
{
    public function index(Request $request)
    {
        // Check if the user is authenticated
        if (!Auth::check()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // Fetch version history data
        // Adjust this query based on how your database is structured and what data you need
        $versionHistoryData = File::where('user_id', Auth::user()->id)
                                  ->orderBy('upload_date', 'desc') // Assuming you have an 'upload_date' column
                                  ->get(['version', 'upload_date', 'uploaded_by']) // Specify the columns you want
                                  ->map(function ($item) {
                                      // Format the date or make any adjustments as needed
                                      $item->upload_date = $item->upload_date->format('d M Y');
                                      return $item;
                                  });

        return response()->json($versionHistoryData);
    }
}
