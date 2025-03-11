<style>
    .w-5{
        display:none
    }
</style>

<table border="1">
    <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Email</td>
        <td>Company Name</td>
        <!-- <td>Operation</td>
        <td>Operation</td> -->
    </tr>
    
    @foreach ($users as $user)
        <tr>
        <td>{{ $user->id }}</td>
        <td>{{ $user->name }}</td>
        <td>{{ $user->email }}</td>
        <td>{{ $user->c_name }}</td>
        <!-- <td><a href="{{ url('delete/'.$user->id) }}">Delete</a></td>
        <td><a href="{{ url('updateUser/'.$user->id) }}">Update</a></td> -->
        </tr>
    @endforeach
</table>

<span>
    {{ $users->links() }}
</span>

<a href="/signUp"> Sign Up Page</a>