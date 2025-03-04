<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class UsersController extends Controller
{
    function testData()
    {
        return DB::select("select * from users");
    }
    //
    public function index()
    {
        $users = User::paginate(5);
        return view('userInner', ['users'=>$users]);
    }

    public function store(Request $request)
    {
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();
        return redirect("/users");
    }

    public function delete($id)
    {
        $data = User::find($id);
        $data->delete();
        return redirect("/users");
    }

    public function update($id)
    {
        $data = User::find($id);
        return view('updateUser', ['data'=>$data]);
    }

    public function storeUpdate(Request $req)
    {
        $user = User::find($req->id);
        $user->name = $req->name;
        $user->email = $req->email;
        $user->save();
        return redirect("/users");
    }

    public function loadView($username)
    {
        return view('user', ['user' => $username]);
    }
}
