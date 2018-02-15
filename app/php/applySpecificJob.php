<?php

$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';



$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));

try{
    $query = $con->prepare("INSERT INTO studentapplication (studentName, jobName, jobID, employerOrg) VALUES (?,?,?,?)");
    $query->bindParam(1,$data->studentName,PDO::PARAM_STR);
    $query->bindParam(2,$data->jobName,PDO::PARAM_STR);
    $query->bindParam(3,$data->jobId,PDO::PARAM_STR);
    $query->bindParam(4,$data->jobOrg,PDO::PARAM_STR);
    $query->execute();


}
catch(PDOException $e){

    echo $e->getMessage();
}
