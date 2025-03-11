<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $fillable = ['name', 'email', 'password'];
    public function getCompany()
    {
        return $this->hasMany('App\Models\Company');
    }

    public static function booted()
    {
        static::deleting(function($user)
        {
            $user()->getCompany()->delete();
        });
    }
}
