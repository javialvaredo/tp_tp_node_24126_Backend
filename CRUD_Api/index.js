const express = require('express');
const app = express();
//const PORT = process.env.PORT || 3000;
const cors = require('cors')
const posteosRouter = require('./routes/posteosRouter.js')
const db = require('./database/database.js')
const config = require('./config.js')

console.log(`NODE_ENV=${config.NODE_ENV}`);
console.log(`PORT=${config.PORT}`);
console.log(`URL=${config.HOST}`);

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
