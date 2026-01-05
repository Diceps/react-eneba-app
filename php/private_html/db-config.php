<?php

$servername = "localhost";
$username 	= "username";
$password 	= "password";
$dbname 	= "dbname";

$pdo = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8mb4", $username, $password);