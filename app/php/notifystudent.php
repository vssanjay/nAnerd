<?php
$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';


$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));
$query = $con->prepare("INSERT INTO notifystudent (jobID, jobName, employerOrganization,studentUserName) VALUES(?,?,?,?)");

$query->bindParam(1,$data->jobId,PDO::PARAM_INT);
$query->bindParam(2,$data->jobName,PDO::PARAM_STR);
$query->bindParam(3,$data->employerOrganization,PDO::PARAM_STR);
$query->bindParam(4,$data->studentUserName,PDO::PARAM_STR);
$query->execute();
