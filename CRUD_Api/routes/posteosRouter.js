const express = require('express');
const router = express.Router();
const {login, altaFormRegistro, traerFormPaseadores, traerFormContacto} = require('../controllers/posteosControllers.js')


//router.get('/login-form', login)
router.post('/login-form', login)

router.get('/registro-form', altaFormRegistro)
router.post('/registro-form', altaFormRegistro)
router.put('/registro-form', altaFormRegistro)
router.delete('/registro-form', altaFormRegistro)

router.post('/procesar_solicitud', traerFormPaseadores)
router.post('/contacto-form', traerFormContacto)

module.exports = router