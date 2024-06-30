const express = require('express');
const router = express.Router();
const {
    login,
    altaRegistro,
    traerRegistros,
    traerUnRegistro,
    actualizarRegistro,
    borrarRegistro,
    traerPaseadores,
    traerUnPaseador,
    crearPaseador,
    actualizarPaseador,
    borrarPaseador
   
} = require('../controllers/posteosControllers.js')


router.post('/login-form', login)
router.post('/registro-form', altaRegistro)
router.get('/registro-form', traerRegistros)
router.get('/registro-form/:id', traerUnRegistro)
router.put('/registro-form/:id', actualizarRegistro)
router.delete('/registro-form/:id', borrarRegistro)

router.get ("/paseadores", traerPaseadores) 
router.get ("/paseadores/:id", traerUnPaseador)
router.post ("/paseadores", crearPaseador) 
router.put ("/paseadores/:id", actualizarPaseador ) 
router.delete ("/paseadores/:id", borrarPaseador)
                   

module.exports = router