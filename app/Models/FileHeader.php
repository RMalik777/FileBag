<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileHeader extends Model
{
  protected $primaryKey = 'id';
  protected $guarded = [];
  protected $fillable = [
    'version',
    'file_date',
    'file_detail_id',
    'user_id',
    'category_id',
  ];
    public function user(){
        return $this->belongsToMany(User::class);
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function fileDetail(){
        return $this->hasMany(FileDetail::class);
    }
}
