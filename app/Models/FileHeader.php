<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileHeader extends Model
{
    public function employee(){
        return $this->belongsToMany(Employee::class);
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function fileDetail(){
        return $this->hasMany(FileDetail::class);
    }
}
