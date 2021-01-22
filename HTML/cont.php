<?php

$id =$_REQUEST['id'];
include('conection.php');
$query= mysqli_query($conect,"SELECT * FROM contmenu c inner join menu m WHERE c.id =$id  and m.id=$id ");
$query2= mysqli_query($conect,"SELECT nombre from menu WHERE id=$id");
$result=  mysqli_num_rows($query);
if($result>0 ){
    $data=mysqli_fetch_assoc($query2);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="value.js"></script>
    <title>Menu <?php echo $data['nombre']?></title>
  
</head>
<body>
    <table>
        <tr>
        <td> 
            <h2>Nombre</h2>
        </td>
        <td> 
            <h2>Acciones</h2>
        </td>  
        </tr>   
        <?php       
        while($data2 = mysqli_fetch_assoc($query)){  
            print_r($data2);  
        ?>
        <tr>
         <td>
        <?php echo $data2['nombre_producto']?>           
        </td>
        <td>
            <button onclick="deleteprod(<?php echo $data2['id_por']?>)">Eliminar</button>
            <button>Actualizar </button>
            </td>
            </tr>
         
            <?php
           
        }   
    mysqli_close($conect);
}
    ?>
    </table>
    
</body>
</html>