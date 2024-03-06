<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileDetail extends Model
{
  protected $primaryKey = 'id';
  protected $guarded = [];
  protected $fillable = [
    'file_name',
    'file_size',
    'file_path',
  ];
  public function fileHeader()
  {
    return $this->belongsTo(FileHeader::class);
  }
}
