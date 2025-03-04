<h1>Add user</h1>
<form action="/addUser" method="post">
    @csrf
    <input type="text" name="name" id="name" placeholder="Enter Name">
    <input type="email" name="email" id="email" placeholder="Enter Email">
    <button type="submit">Add</button>
</form>