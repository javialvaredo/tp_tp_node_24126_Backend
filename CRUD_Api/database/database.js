
// database.js
const { Sequelize } = require('sequelize');

// Conexion a la base de datos
const db = new Sequelize('users_petShop', 'root', 'Pentiumsql4+', {
  host: 'localhost', 
  dialect: 'mysql',
  port:3306
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
