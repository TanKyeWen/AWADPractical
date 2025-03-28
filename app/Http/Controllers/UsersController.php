<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class UsersController extends Controller
{
    public function login(Request $req){
        $req->validate([
            'email' => 'required',
            'password' => 'required|min:8|regex:/[a-z]/|regex:/[A-Z]/|regex:/[0-9]/|regex:/[!@#$%^&*()]/'
        ]);
    }
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

    public function oneToMany()
    {
        return User::find(2) -> getCompany;
    }

    public function companyIndex()
    {
        $data = User::find(2)->getCompany;
        $user = User::find(2);

        return view('company', ['data' => $data], ['user' => $user]);
    }

    public function signUpStore(Request $request)
    {
        $data = $request->all();
        $data['is_admin'] = 0;
        User::create($data);
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
