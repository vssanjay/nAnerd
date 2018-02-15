<?php

$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';


$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));

$query = $con->prepare("INSERT INTO employerprofile(employerId, employerFirstName, employerLastName, aboutMe, position, department, phoneNumber,employerUserName) VALUES(?,?,?,?,?,?,?,?)");

$query->bindParam(1,$data->employerId,PDO::PARAM_STR);
$query->bindParam(2,$data->employerFirstName,PDO::PARAM_STR);
$query->bindParam(3,$data->employerLastName,PDO::PARAM_STR);
$query->bindParam(4,$data->aboutMe,PDO::PARAM_STR);
$query->bindParam(5,$data->position,PDO::PARAM_STR);
$query->bindParam(6,$data->department,PDO::PARAM_INT);
$query->bindParam(7,$data->phoneNumber,PDO::PARAM_INT);
$query->bindParam(8,$data->employerUserName,PDO::PARAM_INT);
$query->execute();


