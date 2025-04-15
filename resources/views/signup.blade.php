@if($errors->any())
    @foreach ($errors->all() as $error)
        <li>{{$error}}</li>
    @endforeach
@endif

@if(session()->has('user'))
    <h2>Hello, {{ session('user') }}</h2>
    <form action="/logout">
        <button type="submit">Logout</button>
    </form>
@endif

<br>

<form action="/signUp" method="POST">
    @csrf
    <input type="text" name="email" placeholder="Enter Email"> <br>
    <span style="color: red">@error('email'){{$message}}@enderror</span><br> 
    <input type="text" name="username" placeholder="Enter Username"> <br>
    <br>
    <input type="password" name="password" placeholder="Enter Password"> <br>
    <span style="color: red">@error('password'){{$message}}@enderror</span><br> 
    <input type="password" name="repassword" placeholder="Enter Password Again"> <br>
    <span style="color: red">@error('repassword'){{$message}}@enderror</span><br> 
    <input type="hidden" name="is_admin" value="0"> 
    <br>
    <button type="submit"> signup </button>
</form>