<?php

$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';



$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));

try {
    $query = $con->prepare("SELECT * FROM off_employee_list WHERE username=:uname");
    $query->bindParam(':uname', $data->username, PDO::PARAM_STR);
    $query->execute();
    $userRow = $query->fetch(PDO::FETCH_ASSOC);
    if ($query->rowCount() > 0) {

        //write to search employer list because it is aprooved by admin and json encode that row.

            echo json_encode($userRow);



    }

}
catch(PDOException $e){

    echo $e->getMessage();
}