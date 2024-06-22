<?php

$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$path = [
    '/' => 'loginReg.php',
    '/Home' => 'home.php',
    '/Pomodoro'=> 'pomodoro.php',
    '/WFC' => 'wfc.php',
    '/Calendar' => 'calendar.php',
    '/Analysis' => 'analysis.php'
];

require (array_key_exists($uri, $path)) ? $path[$uri] : notFound();


