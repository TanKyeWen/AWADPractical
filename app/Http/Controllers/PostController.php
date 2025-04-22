<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    //
    public function index(){
        $posts = Post::all();
        return $posts;
    }
    public function store(Request $request)
    {
        $data = $request->all();
        Post::create($data);
        return redirect("/posts");
    }
    public function destroy($id)
    {
        $data = Post::findorFail($id);
        $data->delete();
        return 204;
    }

    public function update(Request $req, $id)
    {
        $data = Post::findOrFail($id);
        $data->update($req->all());
        return $data;
    }
}
