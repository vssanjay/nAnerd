<?php

$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';


$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));

$query = $con->prepare("INSERT INTO studentprofile(studentId,studentFirstName,studentLastName,aboutMe,skills,major,dateOfBirth,studentUserName) VALUES(?,?,?,?,?,?,?,?)");

$query->bindParam(1,$data->studentId,PDO::PARAM_STR);
$query->bindParam(2,$data->studentFirstName,PDO::PARAM_STR);
$query->bindParam(3,$data->studentLastName,PDO::PARAM_STR);
$query->bindParam(4,$data->aboutMe,PDO::PARAM_STR);
$query->bindParam(5,$data->skills,PDO::PARAM_STR);
$query->bindParam(6,$data->major,PDO::PARAM_INT);
$query->bindParam(7,$data->dateOfBirth,PDO::PARAM_STR);
$query->bindParam(8,$data->studentUserName,PDO::PARAM_STR);
$query->execute();


