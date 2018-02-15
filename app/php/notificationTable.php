<?php
$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';



$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));
try {

    $query=$con->prepare("INSERT into notificationtable (jobID, employerName, studentName, notified) VALUES (?,?,?,?) ");
    $query->bindParam(1,$data->jobId,PDO::PARAM_STR);
    $query->bindParam(2,$data->employerName,PDO::PARAM_STR);
    $query->bindParam(3,$data->studentName,PDO::PARAM_STR);
    $query->bindParam(4,$data->notified,PDO::PARAM_BOOL);
    $query->execute();
    echo json_encode($data);
}

catch(PDOException $e){

    echo $e->getMessage();
}