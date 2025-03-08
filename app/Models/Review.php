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

    public function saveReview($request)
    {
        $this->shop_id = $request->shop_id;
        $this->user_id = 1; // テスト用に固定で1をセット
        $this->rating = $request->rating;
        $this->comment = $request->comment;
        $this->save();

        return $this;
    }
}
