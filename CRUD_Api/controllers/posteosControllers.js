const posteosModel = require('../models/usersModel.js');
const db = require('../database/database.js')
const bcrypt = require('bcrypt'); // importamos dependencia para hashear el password


// Login POST - encripta la clave antes de guardar en la BD
const login = async (req, res) => {
  const { usuario, password } = req.body;
  try {
    // Buscar el usuario en la base de datos
    const user = await posteosModel.findOne({ where: { usuario } });

    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // Comparar la contraseña enviada con la almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Si las credenciales son correctas, se puede generar un token de autenticación acá (es lo que piden!) 
    // O se puede devolver información del usuario excluyendo la contraseña
    
    return res.redirect('http://localhost:5500/crud.html'); // Redirige a la página de dashboard
    //return res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error('Error durante el login:', error);
    return res.status(500).json({message: 'Error interno del servidor'})
      
  }
}

// Formulario Registro  -CREATE POST 
const altaRegistro = async (req, res) => {
  const { usuario, nombre, apellido, telefono, password } = req.body;


  // Validación de los datos recibidos (en realidad ya estan validados por el front, lo dejo como practica)
  if (!usuario || !nombre || !apellido || !telefono || !password) {
    return res.status(400).send('Todos los campos son obligatorios.');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // hashear el password
    // Inserción de datos usando el modelo de Sequelize
    await posteosModel.create({
      usuario,
      nombre,
      apellido,
      telefono,
      password: hashedPassword // Almacenar la contraseña hasheada 
    });

    res.status(201).send('Usuario registrado exitosamente.');
  } catch (error) {
    console.error('Error insertando datos:', error);
    res.status(500).send('Error en el servidor.');
  }
};

//Traer todos los registros READ - GET 
const traerRegistros = async (req, res) => {
  try {
    const registros = await posteosModel.findAll()
    res.json(registros)
  } catch (error) {
    res.json({ message: error.message })
  }
}

const traerUnRegistro = async (req, res) => {
  try {
    const registro = await posteosModel.findByPk(req.params.id)
    res.json(registro)
  } catch (error) {
    res.json({ message: error.message })
  }
}


// Formulario Registro  *UPDATE - PUT*
const actualizarRegistro = async (req, res) => {
  
  try {
    await posteosModel.update(req.body, {where: {id:req.params.id} })

    res.json({"message": "Registro actualizado correctamente"})
  } catch (error) {
    res.json({message:error.message}) 
  } 
}

const borrarRegistro = async (req,res)=>{
  try {
      await posteosModel.destroy({where :{id:req.params.id}})
      res.json({"message": "Registro Borrado correctamente"}) 
  } catch (error) {
      res.json({message:error.message}) 
  }
}







//--------------------------------------------OTROS FORMULARIOS A EVALUAR SU USO -------------------------------------------------------\\

// Formulario paseadores
const traerFormPaseadores = (req, res) => {
  const formData = req.body;
  console.log(formData)
  res.send('probando Formulario de Paseadores')
}


// Formulario Contacto

const traerFormContacto = (req, res) => {
  const { usuario, nombre, apellido, telefono, password } = req.body;
  console.log(formData);
  res.send('probando Formulario Contacto')
}


module.exports = {
  login,
  altaRegistro,
  traerRegistros,
  traerUnRegistro,
  actualizarRegistro,
  borrarRegistro,
  traerFormPaseadores,
  traerFormContacto
}  