<?php
$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';



$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));


try {

    $query2 = $con->prepare("INSERT INTO employee_list(firstName, lastName, Email, Organization, username, password) SELECT firstName, lastName, Email, Organization, username, password FROM off_employee_list WHERE id = :employerId ");
    $query2->bindParam(':employerId', $data->id, PDO::PARAM_INT);
    $query2->execute();
}


catch(PDOException $e){

    echo $e->getMessage();
}