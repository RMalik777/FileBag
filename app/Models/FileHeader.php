<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileHeader extends Model
{
    public function user(){
        return $this->belongsToMany(User::class);
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function fileDetail(){
        return $this->hasMany(FileDetail::class);
    }

    protected $fillable = ['title', 'version', 'file_id'];
    
}
