<x-header data="User Login" />

@if($errors->any())
    @foreach ($errors->all() as $error)
        <li>{{$error}}</li>
    @endforeach
@endif

<br>

<form action="login" method="POST">
    @csrf
    <input type="text" name="email" placeholder="Enter Email"> <br>
    <span style="color: red">@error('email'){{$message}}@enderror</span><br> 
    <input type="password" name="password" placeholder="Enter Password"> <br>
    <span style="color: red">@error('password'){{$message}}@enderror</span><br> 
    <input type="hidden" name="is_admin" value="0"> 
    <br>
    <button type="submit"> Login </button>
</form>