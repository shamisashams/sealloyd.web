<?php

namespace App\Models;

use Kalnoy\Nestedset\NodeTrait;
use App\Models\Translations\StaffTranslation;
use App\Traits\ScopeFilter;
use App\Models\File;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Staff extends Model
{
    use Translatable, HasFactory, ScopeFilter;
    protected $table = 'staffs';
    protected $fillable = ['status'];

    public function getFilterScopes(): array
    {
        return [
            'id' => [
                'hasParam' => true,
                'scopeMethod' => 'id'
            ],
            'status' => [
                'hasParam' => true,
                'scopeMethod' => 'status'
            ],
            'title' => [
                'hasParam' => true,
                'scopeMethod' => 'titleTranslation'
            ],
            'category_id' => [
                'hasParam' => true,
                'scopeMethod' => 'categoryId'
            ]
        ];
    }


    public function files(): MorphMany
    {
        return $this->morphMany(File::class, 'fileable');
    }

    public $translatedAttributes = [
        'name',
        'position',
        'slug',
    ];

    // this adds image
    public function latestImage()
    {
        return $this->morphOne(File::class, 'fileable')->latestOfMany();
    }

    protected $translationModel = StaffTranslation::class;
}
