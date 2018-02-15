<?php
$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';


$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));

try {
    $query = $con->prepare("SELECT * FROM studentprofile WHERE studentUserName=:studentUserName ");
    $query->bindParam(':studentUserName', $data->studentUserName, PDO::PARAM_STR);
    $query->execute();
    $userRow = $query->fetch(PDO::FETCH_ASSOC);
    if ($query->rowCount() > 0) {
        echo json_encode($userRow);
    }



}
catch(PDOException $e){

    echo $e->getMessage();
}