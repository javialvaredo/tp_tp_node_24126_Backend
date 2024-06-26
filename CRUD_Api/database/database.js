//const config = require('../config.js')
//require('dotenv').config(); // Carga las variables de entorno
const { Sequelize } = require('sequelize');

// Conexion a la base de datos 

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST, 
  dialect: 'mysql',
  port: process.env.DB_PORT
});


const testConnection = async () => {
  try {
    await db.authenticate();
    console.log(`Conexión exitosa con la base de datos en puerto 3306}`);
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error); 
  }
};

testConnection();

module.exports = db;
