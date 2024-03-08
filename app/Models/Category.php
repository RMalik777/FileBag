<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
  protected $primaryKey = 'id';
  protected $guarded = [];
  protected $fillable = [
    'category_name',
  ];
    public function fileHeader(){
        return $this->hasMany(FileHeader::class);
    }
}
