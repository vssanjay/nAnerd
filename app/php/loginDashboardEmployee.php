<?php

$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';



$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));

try {
    $query = $con->prepare("SELECT * FROM employee_list WHERE username=:uname");
    $query->bindParam(':uname', $data->username, PDO::PARAM_STR);
    $query->execute();
    $userRow = $query->fetch(PDO::FETCH_ASSOC);
    if ($query->rowCount() > 0) {

        if (password_verify("$data->password", $userRow['password'])) {
            echo json_encode($userRow);
        }

    }

}
catch(PDOException $e){

    echo $e->getMessage();
}