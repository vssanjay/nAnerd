<?php

$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';



$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));

try {
    $query = $con->prepare("UPDATE job_table SET jobName=:jobName,
    jobDescription=:jobDescription, skills=:skills,startDate=:startDate,
    endDate=:endDate,salary=:salary,viewable=:viewable WHERE ID =:jobId");
    $query->bindParam(':jobId',$data->jobId,PDO::PARAM_STR);
    $query->bindParam(':jobName',$data->jobName,PDO::PARAM_STR);
    $query->bindParam(':jobDescription',$data->jobDescription,PDO::PARAM_STR);
    $query->bindParam(':skills',$data->skills,PDO::PARAM_STR);
    $query->bindParam(':startDate',$data->startDate,PDO::PARAM_STR);
    $query->bindParam(':endDate',$data->endDate,PDO::PARAM_STR);
    $query->bindParam(':salary',$data->salary,PDO::PARAM_STR);
    $query->bindParam(':viewable',$data->viewable,PDO::PARAM_BOOL);
    $query->execute();

}


catch(PDOException $e){

    echo $e->getMessage();
}