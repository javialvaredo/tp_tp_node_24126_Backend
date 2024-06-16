// Formulario login
const traerFormLogin = (req, res) => {
    const formData = req.body;
    console.log(formData)
    res.send(`probando Formulario de Login, ${formData.loginUsuario}`)
}


// Formulario registro
const traerFormRegistro = (req, res) => {
    const formData = req.body;
    console.log(formData)
    res.send(`probando Formulario de Registro, ${formData.apellido}`)
}

// Formulario paseadores
const traerFormPaseadores = (req, res) => {
    const formData = req.body;
    console.log(formData)
    res.send('probando Formulario de Paseadores')
}
// Formulario Contacto

const traerFormContacto = (req, res) => {
    const formData = req.body;
    console.log(formData);
    res.send('probando Formulario Contacto')
}



module.exports = {traerFormLogin, traerFormRegistro, traerFormPaseadores, traerFormContacto}  