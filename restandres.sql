create database if not exists restandres ;
use restandres;
drop table menu;
create table admin(
	id int auto_increment,
    nombre varchar(255),
    username varchar (255),
    pass varchar (255),
    primary key(id));

create table menu (
	id int(45) auto_increment,
    nombre varchar(255),
    descripcion varchar (255),
    fecha_cre   date   ,
    hora_cre  time,
    popularidad int (90),
    valor int (100),
    primary key(id)
);
create table contmenu(
id_por int (45) auto_increment,
	id int (45),
    nombre_producto varchar (100),
     fecha_cre   date   ,
    hora_cre  time,
    FOREIGN KEY (id) REFERENCES menu (id),
    primary key (id_por));
    
    DELIMITER $$
CREATE PROCEDURE eliminarproduc( in i int(255))
BEGIN
    delete 
    FROM contmenu
    WHERE id_por =id;
END$$
DELIMITER
DELIMITER $$
CREATE PROCEDURE agregarmenu_3( 
in _nombre varchar (255),
in _descripcion varchar (255),
in _popularidad int (50),
in _valor int (50))
BEGIN
 INSERT INTO menu(nombre,descripcion,fecha_cre,hora_cre, popularidad,valor)
 values (_nombre,_descripcion, current_date(),current_time(),_popularidad ,_valor);
    
END$$
DELIMITER
   
    
    
insert into menu(nombre,fecha_cre,hora_cre,popularidad,valor) values ("Ejecutivo",current_date(),current_time(),"0","40000");
insert into contmenu (id,nombre_producto,fecha_cre,hora_cre)values ("1","Pasta",current_date(),current_time());
insert into contmenu (id,nombre_producto,fecha_cre,hora_cre)values ("1","carne",current_date(),current_time());
insert into contmenu (id,nombre_producto,fecha_cre,hora_cre)values ("1","ajiaco",current_date(),current_time());
insert into admin (nombre,username,pass) values ("jose","username","pass");
