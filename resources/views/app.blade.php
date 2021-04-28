<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Laravel Vite React Inertia App</title>
  @react
  @routes
  @vite
</head>

<body class="antialiased">
  @inertia
</body>

</html>