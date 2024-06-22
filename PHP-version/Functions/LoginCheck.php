<?php
if (!isset($_COOKIE['PHPSESSID']) || empty($_COOKIE['PHPSESSID']))
{
    header("Location: /");
    exit;
}