<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Chakra Play</title>
  @react
  @routes
  @client
  @vite
</head>

<body class="antialiased">
  @inertia
</body>

</html>
