<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet">
  @vite('resources/css/app.css')
  @vite('resources/js/app.jsx')
  @inertiaHead
</head>

<body>
  @inertia
</body>

</html>
