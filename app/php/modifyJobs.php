<?php
$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';



$con = new PDO($dsn, $username, $password);
$userName = json_decode(file_get_contents("php://input",true));


try {
    $userData= array();
    $query = $con->prepare("SELECT * FROM job_table WHERE employerUserName=:uname");
    $query->bindParam(':uname', $userName->username, PDO::PARAM_STR);
    $query->execute();
    while($userRow = $query->fetch(PDO::FETCH_ASSOC)){
        $userData['allJobs'][]=$userRow;

    }

    echo json_encode($userData);
}


catch(PDOException $e){

    echo $e->getMessage();
}