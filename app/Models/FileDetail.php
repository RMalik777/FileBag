<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileDetail extends Model
{
    public function fileHeader(){
        return $this->belongsTo(FileHeader::class);
    }
}
