<x-header data=x />

hello, {{ $user }}
@if ($user==="admin")
    <p>Welcome, Admin</p>
@elseif ($user==="John")
    <p>Welcome {{ $user }}</p>
@else
    <p>Welcome,,,, guest</p>
@endif

@foreach (['car', 'pen', 'whataboutchu', 'ambatukan'] as $item)
    <p>{{ $item }}</p>
@endforeach

@include('userInner')

<script>
    var items = @json(['car', 'pen', 'abc']);
    console.warn(items);
</script>