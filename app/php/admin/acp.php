<?php

$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';


$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));

$query = $con->prepare("UPDATE admintable SET adminPassword =:passw");

$hash_password=password_hash("$data->password",PASSWORD_BCRYPT);
$query->bindParam(':passw',$hash_password,PDO::PARAM_STR);
$query->execute();

