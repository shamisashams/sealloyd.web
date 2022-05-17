<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class rateservice extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'company_name',
        'created_at',
        'satisfied_dissatisfied',
        'recomendations',
        'repurchases',
        'rate_quality',
        'satisfied',
        'satisfied_service',
        'satisfied_price',
        'satisfied_value',
    ];
}
