<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Users;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome', );
});

Route::get('/AboutUs', function () {
    return view('aboutus');
});

Route::get('/bye', function () {
    return 'goodbye';
});

Route::view('/ContactUs', 'contact');

//Route::get('/users/{user}', [Users::class, 'index']);

Route::get('/user/{user}', [Users::class, 'loadView']);

Route::get('/user/{username}/{department}', function($username, $department) {
    return view('user', ['user' => $username, 'department' => $department]);
});