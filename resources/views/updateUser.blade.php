<h1>Update User {{ $data['name'] }}</h1>
<form action="" method="post">
    @csrf
    <input type="hidden" name="id" value="{{ $data['id'] }}">
    <input type="text" name="name" id="name" value="{{ $data['name'] }}">
    <input type="email" name="email" id="email" value="{{ $data['email'] }}">
    <input type="submit" value="update">
</form>