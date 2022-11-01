const express = require('express')
const ruta = express.Router();
const fs = require('fs')
let contador = 0;
let id = 0;
let productos =[] //contenedor de memoria

ruta.get('/',(req,res)=>{
    let count = ++contador
    fs.writeFileSync('./visitas.txt',count.toString())
    // res.send(productos)
    res.render('productos',{title:"Productos",productos:productos})
})
ruta.post('/add',(req,res)=>{
    let obj = req.body;
    obj.id = ++id;
    productos = [obj,...productos];
    res.redirect('/productos');
})

ruta.put('/update/:id',(req,res)=>{
    let id = req.params.id;
    let obj = req.body;
    for (let i = 0; i < productos.length; i++) {
        if(productos[i].id === Number(id)){
            productos[i]=obj;
        }
    }
    res.redirect('/productos');
})

ruta.delete('/delete/:id',(req,res)=>{
    let id = req.params.id;
    let newproductos = productos.filter((p)=>p.id!==Number(id)); 
    productos=newproductos;
    res.redirect('/productos');
})

module.exports = ruta