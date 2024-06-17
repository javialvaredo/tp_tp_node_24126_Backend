
const sequelize = require('./database');

const createDatabaseAndTable = async () => {
  try {
    // Crear la base de datos si no existe
    await sequelize.query('CREATE DATABASE IF NOT EXISTS users_petShop DEFAULT CHARACTER SET utf8;');
    console.log('Base de datos creada o ya existe');

    // Cambiar o traer la base de datos
    await sequelize.query('USE users_petShop');

    // Crear la tabla si no existe
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        usuario VARCHAR(30) NOT NULL,
        nombre VARCHAR(20) NOT NULL,
        apellido VARCHAR(20) NOT NULL,
        telefono VARCHAR(15) NOT NULL,
        password VARCHAR(30) NOT NULL
        ) DEFAULT CHARACTER SET utf8mb4;
        `;


    await sequelize.query(createTableQuery);
    console.log('Tabla creada o ya existe');

  } catch (error) {
    console.error('Error al ejecutar el SQL:', error);
  } finally {
    await sequelize.close();
    console.log('Conexión cerrada');
  }
};

createDatabaseAndTable();
