const express = require('express')

const ruta = express.Router();

ruta.get('/',(req,res)=>{
    res.render('index',{title:"Nuestro negocio"})
})
ruta.get('/nosotros',(req,res)=>{
    res.render('nosotros')
})

module.exports = ruta