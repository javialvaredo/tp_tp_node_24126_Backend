
const express = require('express');
const app = express();
const cors = require('cors')
const posteosRouter = require('./routes/posteosRouter.js')
const db = require('./database/database.js')
const config = require('./config.js')


app.use(cors())
app.use(express.json())

// Middleware para la carpeta public
app.use(express.static('./public'))


// Middleware para analizar datos de formularios
app.use(express.urlencoded({extended: true }));

app.use('/', posteosRouter)


app.listen(config.PORT, config.HOST, () => {
    console.log(`Servidor corriendo en HTTP://${config.HOST}:${config.PORT}`)
})

