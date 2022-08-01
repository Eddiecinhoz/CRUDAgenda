-- create database
CREATE DATABASE agendacrud;

-- using the database
USE agendacrud;

-- creating a table

CREATE TABLE CONTACTO(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido1 VARCHAR(50),
    apellido2 VARCHAR(50),
    telefono VARCHAR(100),
    direccion VARCHAR(100),
    correo VARCHAR(100)
);



-- to show all tables
show tables;

-- to describe table
describe CONTACTO;