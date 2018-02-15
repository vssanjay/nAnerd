<?php

$dsn = 'mysql:host=localhost;dbname=nanerd';
$username = 'root';
$password = 'root';


$con = new PDO($dsn, $username, $password);


$data = json_decode(file_get_contents("php://input",true));
$query = $con->prepare("INSERT INTO employee_list(firstName,lastName,Email,Organization,username,password) VALUES(?,?,?,?,?,?)");
$query->bindParam(1,$data->firstName,PDO::PARAM_STR);
$query->bindParam(2,$data->lastName,PDO::PARAM_STR);
$query->bindParam(3,$data->Email,PDO::PARAM_STR);
$query->bindParam(4,$data->Organization,PDO::PARAM_STR);
$query->bindParam(5,$data->username,PDO::PARAM_STR);
$hash_password=password_hash("$data->password",PASSWORD_BCRYPT);
$query->bindParam(6,$hash_password,PDO::PARAM_STR);
$query->execute();
