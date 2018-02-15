<?php
$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';



$con = new PDO($dsn, $username, $password);
try {
    $userData= array();
    $query = $con->prepare("SELECT id,jobName,jobDescription,skills,endDate,salary,employerOrganization FROM job_table WHERE viewable=TRUE ");
    $query->execute();
    while($userRow = $query->fetch(PDO::FETCH_ASSOC)){
        $userData['allJobs'][]=$userRow;

    }
    echo json_encode($userData);

    }


catch(PDOException $e){

    echo $e->getMessage();
    }