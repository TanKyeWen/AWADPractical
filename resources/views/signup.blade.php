<h1>Sign Up Form</h1>
<form action="/signUp" method="post">
    @csrf
    <input type="text" name="name" id="name" placeholder="Enter Name"> <br><br>
    <input type="email" name="email" id="email" placeholder="Enter Email"> <br><br>
    <input type="password" name="password" id="password" placeholder="Enter Password"><br><br>
    <input type="hidden" name="is_admin" id="is_admin" value="0">
    <button type="submit">Sign Up</button>
</form>