<?php
$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';



$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));
try {

    $query = $con->prepare("SELECT employerUserName FROM job_table WHERE id=:jobId");
    $query->bindParam(':jobId', $data->jobId, PDO::PARAM_STR);
    $query->execute();
    $employerData = $query->fetch(PDO::FETCH_ASSOC);
    $employerArray = array_values($employerData);
    $employerName=$employerArray[0];
    $query2 = $con->prepare("SELECT Email from employee_list WHERE username=:employerName");
    $query2->bindParam(':employerName',$employerName,PDO::PARAM_STR);
    $query2->execute();
    $employerEmailData = $query2->fetch(PDO::FETCH_ASSOC);
    echo json_encode($employerData);
}

catch(PDOException $e){

    echo $e->getMessage();
}