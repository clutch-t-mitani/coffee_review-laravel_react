<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Shop extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'location',
        'description'
    ];

    // reviewsテーブルとのリレーション
    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }
}
