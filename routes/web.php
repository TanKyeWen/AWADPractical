<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Users;
use App\Http\Controllers\UsersController;

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

Route::view('/signUp', 'signup');
Route::post('/signUp', [UsersController::class, 'signup']);

// Route::middleware(['protectedPage'])->group(function(){
//     Route::view('/signUp', 'signup');
//     Route::view('/contact', 'contact');
// });
// Route::view('/login', 'login')->middleware('ageCheck');
Route::get('/login', function(){
    if(session()->has('user')){
        return redirect('/');
    };
    return view('/login');
});

Route::get('/logout', function(){
    if(session()->has('user')){
        session()->pull('user');
        session()->flush();
    };
    return redirect('/login');
});

Route::post('/login', [UsersController::class, 'login']);

Route::get('/work2', [UsersController::class, 'companyIndex']);

Route::get('/updateUser/{id}', [UsersController::class, 'update']);
Route::post('/updateUser/{id}', [UsersController::class, 'storeUpdate']);

Route::view('/addUser', 'addUser');
Route::post('/addUser', [UsersController::class, 'store']);
Route::get('/delete/{id}', [UsersController::class, 'delete']);

//Route::post('/signUp', [UsersController::class, 'signUpStore']);

Route::get('/users', [UsersController::class, 'index']);

Route::get('/test', [UsersController::class, 'index']);

Route::get('/', function () {
    return view('welcome', );
});

Route::get('/AboutUs', function () {
    return view('aboutus');
});

Route::get('/bye', function () {
    return 'goodbye';
});

//Route::get('/users/{user}', [Users::class, 'index']);

// Route::get('/user', function($users) {
//     return view('userInner', [UsersController::class, 'index']);
// });
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
