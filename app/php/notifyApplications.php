<?php
$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';



$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));

try {
    $newData= array();
    $query = $con->prepare("SELECT jobID,employerName,studentName FROM notificationtable WHERE employerName = :uname");
    $query->bindParam(':uname',$data->employerName,PDO::PARAM_STR);
    $query->execute();
    while($userRow = $query->fetch(PDO::FETCH_ASSOC)){
            $newData['allJobs'][]=$userRow;

        }
    echo json_encode($newData);



}


catch(PDOException $e){

    echo $e->getMessage();
}