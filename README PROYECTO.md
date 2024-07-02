# Grupo 5 - COMISION 24126 Julieta Piclu, Marisol Pascua, Elvira Maria Maggiolo y Javier Alvaredo.

Nuestro proyecto presenta dos CRUD: uno para el ingreso o registro de usuarios y otro para dar de alta los paseadores ofrecidos por la veterinaria.


1. CRUD USUARIOS  
API Endpoints  
Descripción de los endpoints disponibles en la API:  

Direccion del sitio frontend: https://front-paseadores.netlify.app
Direccion del Servidor Backend: https://javi-alvaredo.alwaysdata.net

POST /login-form : Valida datos ingresados (nombre de usuario/mail y contraseña) para el inicio de sesión.  
POST /registro-form :  Crea el registro de un nuevo usuario, las claves se guardan encriptadas en la base de datos mediante
el uso de la dependencia bcrypt.

El frontend del sitio está integrado (sección "LOG IN") con el backend a través de métodos POST para las operaciones de login y registro de usuarios.

Se puede probar su funcionamiento dando de alta un usuario y luego loguearse o bien utilizar el siguiente usuario::
Usuario supervisor@petshop.com.ar 
Pass: Paseos2024

Los metodos empleados son los siguientes:
GET /registro-form : Muestra todos los registros realizados por los usuarios. (desde el navegador)
GET /registro-form/:id : Muestra un registro de un usuario según su ID.
Valida usuario y clave desde el servidor

ACLARACIÓN: Desde el FRONT, una vez iniciada la sesión, se ingresa automáticamente al administrador de paseos (CRUD detallado a continuación).  


2. CRUD PASEADORES  
API Endpoints  
Descripción de los endpoints disponibles en la API:  

GET /paseadores : Muestra la lista de todos los paseadores.  git status
GET /paseadores/:id : Muestra un paseador según su ID.  
POST /paseadores: Crea un nuevo paseador.  
PUT /paseadores/:id : Actualiza un paseador existente según su ID.  
DELETE /paseadores/:id : Elimina un paseador según su ID.  

Este segundo CRUD está integrado con el frontend del sitio, para las cinco operaciones ya detalladas, tiene una base de datos con dos tablas: usuarios y paseadores.
Sumamos una funcionalidad dinámica para que se logre visualizar los datos y los cambios aplicados en el frontend a través de los métodos HTTP: POST, GET, PUT Y DELETE.  

Datos adicionales.
Dado que se hizo un deploy a un servidor, se utilizaron variables de entorno para proteger los datos sensibles de conexion y acceso.

La direccion de los repositorios para ver el código son los siguientes:

https://github.com/javialvaredo/front_paseadores.git

https://github.com/javialvaredo/tp_tp_node_24126_Backend.git



  