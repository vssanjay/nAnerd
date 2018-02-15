<?php
$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';



$con = new PDO($dsn, $username, $password);
$data = json_decode(file_get_contents("php://input",true));


try {
    $query = $con->prepare("UPDATE off_employee_list SET verification=TRUE where id=:employerId");
    $query->bindParam(':employerId', $data->id, PDO::PARAM_INT);
    $query->execute();

}


catch(PDOException $e){

    echo $e->getMessage();
}