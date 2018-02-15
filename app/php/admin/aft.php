<?php

$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';


$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));

$query = $con->prepare("UPDATE admintable SET firstTime=0 WHERE adminUserName=:uname");
$query->bindParam(':uname',$data->username,PDO::PARAM_STR);
$query->execute();


