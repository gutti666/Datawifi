<?php 
include('conection.php');
if(!empty($_POST)){
        if(!empty($_POST['username'])|| !empty($_POST['password'])){
            $username= $_POST['username'];
                 
            $pass= $_POST['password'];

            $query=  mysqli_query($conect,"SELECT * FROM admin  WHERE username ='$username' and pass= '$pass'");
            $result = mysqli_num_rows($query);
            if($result>0){
               $data = mysqli_fetch_assoc($query);
               $_SESSION['nombre']= $data['nombre'];
               $_SESSION['sesion']= true ;
               header('location:principal.html');
            }

        }else{
            $alert = " por favor rellene todos los campos";
        }
  
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="script" href="animation.js">
    <title>Restaurante don andres</title>
</head>

<body>
    <form action="" method="post">
        <input type="text" placeholder="username" name="username" id="username">
        <input type="text" placeholder="password" name="password" id="password">
        <button type="submit"> Login</button>
    </form>
        </p>
        <?php 
        echo isset($alert);
        ?> 
 

   
</body>

</html>