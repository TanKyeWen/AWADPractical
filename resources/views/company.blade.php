<style>
    .w-5{
        display:none
    }
</style>

<table border="1">
    <tr>
        <td>ID</td>
        <td>Comapny Name</td>
        <td>User Name</td>
        <td>User Email</td>
    </tr>
    
    @foreach ($data as $company)
        <tr>
            <td>{{ $company->id }}</td>
            <td>{{ $company->name }}</td>
            <td>{{ $user->name }}</td>
            <td>{{ $user->email }}</td>
        </tr>
    @endforeach
</table>


<a href="/signUp"> Sign Up Page</a>