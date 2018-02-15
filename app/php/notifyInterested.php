<?php
$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';



$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));
try {
    $studentData = array();
    $query = $con->prepare("SELECT jobID,jobName,employerOrganization  FROM notifystudent WHERE studentUserName=:studentUserName");
    $query->bindParam(':studentUserName', $data->studentUserName, PDO::PARAM_STR);
    $query->execute();
    while($studentInterestedData = $query->fetch(PDO::FETCH_ASSOC)){

        $studentData['allInterested'][]=$studentInterestedData;

    }
    echo json_encode($studentData);

}

catch(PDOException $e){

    echo $e->getMessage();
}