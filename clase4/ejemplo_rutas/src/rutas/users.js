const express = require('express')

const ruta = express.Router();

ruta.get('/',(req,res)=>{
    res.send('Estamos en el inicio de la página de users')
}) 

module.exports = ruta