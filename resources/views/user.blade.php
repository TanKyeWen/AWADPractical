<x-header data=x />

<!-- hello, {{ $user }}
@if ($user==="admin")
    <p>Welcome, Admin</p>
@elseif ($user==="John")
    <p>Welcome {{ $user }}</p>
@else
    <p>Welcome,,,, guest</p>
@endif

@foreach (['car', 'pen', 'whataboutchu', 'ambatukan'] as $item)
    <p>{{ $item }}</p>
@endforeach -->

<h1> User View </h1>

@include('userInner')

<script>
    var items = ['car', 'pen', 'abc'];
    console.warn(items);
</script>