<?php

function dd()
{
    echo "<pre>";
    var_dump($_SERVER);
    echo "</pre>";
}

function notFound(){
    http_response_code(404);

    require '404.php';
}