<?php
// valores conexion 
$host = "localhost";
$database = "restandres";
$user = "root";

// eliminar git 
$password = "1007703318@L";
// crear conexxion 
$conect = mysqli_connect($host, $user, $password, $database);
// Verificacion de conecion
if (!$conect) {
    // die("Conecion rechazada " . mysqli_connect_error());
}else{
    // echo "Conexion con exito ";
}



?>