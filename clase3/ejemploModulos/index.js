const express = require('express');//módulo terceros
const fs = require('fs')//módulo nativo
const app = express();
const Archivo = require('./contenedor/archivo.js')//módulo propio
let visitas =0; 
//    string-sufijo, callback

app.get('/perfil',  (req,res)=>{
    visitas++
    Archivo.escribirArchivo('./visitas.txt',visitas.toString())
    res.send('<h1>Mi perfil</h1> visita N °'+visitas)
})
app.get('/eliminar',(req,res)=>{
    Archivo.eliminarArchivo('./visitas.txt');
    res.send(' Se eliminó el archivo!')
})
app.listen(8080,()=>{
    console.log("El servidor está escuchando por el puerto 8080");
})