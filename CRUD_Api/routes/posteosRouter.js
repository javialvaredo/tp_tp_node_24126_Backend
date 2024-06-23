const express = require('express');
const router = express.Router();
const {
    login,
    altaRegistro,
    traerRegistros,
    traerUnRegistro,
    actualizarRegistro,
    borrarRegistro,
    traerFormPaseadores,
    traerFormContacto
} = require('../controllers/posteosControllers.js')

router.post('/login-form', login)
router.post('/registro-form', altaRegistro)
router.get('/registro-form', traerRegistros)
router.get('/registro-form/:id', traerUnRegistro)
router.put('/registro-form/:id', actualizarRegistro)

router.delete('/registro-form/:id', borrarRegistro)

router.post('/procesar_solicitud', traerFormPaseadores)
router.post('/contacto-form', traerFormContacto)

//direccion y puerto de frontend
router.get('http://localhost:5500/crud.html', (req, res) => {
    res.send('¡Bienvenido al CRUD!');
    
  });


module.exports = router