
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const posteosRouter = require('./routes/posteosRouter.js')

app.use(cors())
app.use(express.json())

// Middleware para analizar datos de formularios
app.use(express.urlencoded({extended: true }));

app.use('/', posteosRouter)


app.listen(port, () => {
    console.log(`Servidor corriendo en puerto: ${port}`)
})