<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Users extends Controller
{
    //
    public function index($user)
    {
        echo $user;
        echo ", Hello from index \n";
        //return ['name'=>'Abu', 'age'=>1];
    }

    public function loadView($username)
    {
        return view('user', ['user' => $username]);
    }
}
