const express = require('express');
const router = express.Router();
const {traerFormLogin, traerFormRegistro, traerFormPaseadores, traerFormContacto} = require('../controllers/posteosControllers.js')


router.get('/login-form', traerFormLogin)
router.post('/login-form', traerFormLogin)

router.get('/registro-form', traerFormRegistro)
router.post('/registro-form', traerFormRegistro)
router.put('/registro-form', traerFormRegistro)
router.delete('/registro-form', traerFormRegistro)

router.post('/procesar_solicitud', traerFormPaseadores)
router.post('/contacto-form', traerFormContacto)

module.exports = router