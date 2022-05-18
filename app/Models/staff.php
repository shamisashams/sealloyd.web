<?php

namespace App\Models;

use Kalnoy\Nestedset\NodeTrait;
use App\Models\Translations\StaffTranslation;
use App\Traits\ScopeFilter;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Staff extends Model
{
    use Translatable, HasFactory, ScopeFilter;
    use HasFactory;
    protected $table = 'staffs';
    // protected $fillable = [
    //     'name',
    //     'position',
    // ];

    public $translatedAttributes = [
        'name',
        'position',
    ];

    protected $translationModel = StaffTranslation::class;
}
