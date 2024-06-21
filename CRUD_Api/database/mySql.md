CONECTARSE POR LA CONSOLA:
mysql -h localhost -u root -p

/---------------------------------------------------------------------\
CREAR BASE DE DATOS

* Copiar y pegar en un nuevo SQL query:

CREATE SCHEMA `users_petShop` DEFAULT CHARACTER SET utf8mb4 ;
USE users_petShop;

 CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        usuario VARCHAR(30) NOT NULL,
        nombre VARCHAR(20) NOT NULL,
        apellido VARCHAR(20) NOT NULL,
        telefono VARCHAR(15) NOT NULL,
        password VARCHAR(30) NOT NULL,
        createdAt DATETIME NULL,
        updatedAt DATETIME NULL
        ) DEFAULT CHARACTER SET utf8mb4;
