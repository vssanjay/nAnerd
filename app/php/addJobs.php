<?php

$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';


$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));
$query = $con->prepare("INSERT INTO job_table(jobName,jobDescription,skills,startDate,endDate,salary,employerUserName,employerOrganization,viewable) VALUES(?,?,?,?,?,?,?,?,?)");

$query->bindParam(1,$data->jobName,PDO::PARAM_STR);
$query->bindParam(2,$data->jobDescription,PDO::PARAM_STR);
$query->bindParam(3,$data->skills,PDO::PARAM_STR);
$query->bindParam(4,$data->startDate,PDO::PARAM_STR);
$query->bindParam(5,$data->endDate,PDO::PARAM_STR);
$query->bindParam(6,$data->salary,PDO::PARAM_INT);
$query->bindParam(7,$data->employerUserName,PDO::PARAM_STR);
$query->bindParam(8,$data->employerOrganization,PDO::PARAM_STR);
$query->bindParam(9,$data->viewable,PDO::PARAM_BOOL);
$query->execute();
