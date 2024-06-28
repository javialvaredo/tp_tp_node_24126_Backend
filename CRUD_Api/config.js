// config.js
// dotenv.config() carga las variables de entorno del archivo .env en process.env
// Las variables de entorno (NODE_ENV, HOST, PORT) se leen desde process.env y se asignan a
// las propiedades exportadas por module.exports. Si alguna de estas variables no está definida
// en el entorno (por ejemplo, si no existe en el archivo .env o no está definida en el sistema
// operativo), se utiliza el valor por defecto proporcionado ('development', '127.0.0.1', 3000).
//  las variables de entorno definidas en .env se cargan, y config.js utiliza estos valores
// para configurar los parámetros de tu aplicación.


const dotenv = require('dotenv');
const path = require('path');
/* 
dotenv.config({
  path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
}); */

module.exports = {

  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT
}