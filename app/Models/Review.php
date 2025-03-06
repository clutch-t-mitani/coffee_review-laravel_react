<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        'shop_id',
        'user_id',
        'rating',
        'comment',
    ];

    // shopsテーブルとのリレーション
    public function shop(): BelongsTo
    {
        return $this->belongsTo(Shop::class);
    }

    // usersテーブルとのリレーション
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
