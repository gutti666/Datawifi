Datawifi


API 

------
Se utilizo node js
y express js , junto con la instalacion de dependencias como cors y mysql,
no se alcanzo a realizar la subida de archivos  funcional para la foto del  sin embargo se quedo la peticions http y con la creacion de una carpeta para el almacenamiento de estas 


WEB 

---------
Se utilizo hatml con java scrip para el consumo de la api sin eambargo esta no pudo ser terminada y quedoi ncompleta  en la parte de funcionalidad y diseño  , la pagina web cuenta con un login  basico para el inicio de sesion desde la base de datos para los usuarios administrador  o en este caso solo el administrado


Hibirda 
----
La aplicacion mobil fue realizada con ionic , utilizando el framework de angular,creando servicios para el consumo de la respectiva api ,sin embargo esta quedo incompleta en su funcionalidad y apartado de diseño,
Para la aplicacion hibidra no se utilizo base de datos ya que no era nesesaria esta , sin ebargo cuenta con los diferentes servicios para el consumo de la informacion de la base de datos por medio de la api 



Base de datos 
----
para la base de datos se utilizaron 3 tablas 
las cuales fueron 
    1 el login del administrador
    2 la table de los menus 
    3 la tabla de contenido de los menus 
a demas se integraron procedimientos almacenados para la respectiva eliminacion y insersion de la tabla menu 
,la actualizacion  no se pudo realizar y el ingreso de informacion en la parte del cliente no quedo funcionando sin embargo la api si realiza las operaciones , esto comprobado utilizando la herramienta post man 
esta cuenta con una realcion foranea entre las tablas de menu y contenido de menu , aclarando que cada table tiene su id primario



Conexiones 

-------
Cada aarchivo de conexion esta espesificado ya sea en la api el cual es database.js y en HTML que es conexion .php

