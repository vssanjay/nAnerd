<?php

$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';



$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));

try {
    $query = $con->prepare("SELECT * FROM admintable WHERE adminUserName=:uname");
    $query->bindParam(':uname', $data->username, PDO::PARAM_STR);
    $query->execute();
    $userRow = $query->fetch(PDO::FETCH_ASSOC);
    if ($query->rowCount() > 0) {
        $hash_password = password_hash("$data->password", PASSWORD_BCRYPT);
        if (password_verify("$data->password", $userRow['adminPassword'])) {
            echo json_encode($userRow);
        }

    }

}
catch(PDOException $e){

    echo $e->getMessage();
}