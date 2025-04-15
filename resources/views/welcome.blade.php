<!DOCTYPE html>
<h1>Welcome to my first laravel application!</h1>

@if(session()->has('user'))
    <h2>Hello, {{ session('user') }}</h2>
    <form action="/logout">
        <button type="submit">Logout</button>
    </form>
@endif
