const db = require('../database/database.js')

const {DataTypes} = require('sequelize')

const posteosModel = db.define('users', {
    usuario: {type:DataTypes.STRING},
    nombre: {type:DataTypes.STRING},
    apellido: {type:DataTypes.STRING},
    telefono: {type:DataTypes.STRING},
    password: {type:DataTypes.STRING}

})

module.exports = posteosModel

