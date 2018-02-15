<?php
$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';



$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));
try {
    $newData= array();
    $query = $con->prepare("SELECT jobID,employerName,studentName FROM notificationtable WHERE (notified=FALSE) AND (employerName=:uname)  ");
    $query->bindParam(':uname',$data->employerName,PDO::PARAM_STR);
    $query->execute();
    if($query->rowCount()>0){
        while($userRow = $query->fetch(PDO::FETCH_ASSOC)){
            $newData['allJobs'][]=$userRow;

        }
        echo json_encode($newData);
        $query2 = $con->prepare("UPDATE notificationtable SET notified = TRUE ");
        $query2->execute();
    }

}


catch(PDOException $e){

    echo $e->getMessage();
}