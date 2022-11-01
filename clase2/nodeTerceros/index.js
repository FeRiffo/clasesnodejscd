const express = require('express')
const users = require('../users')
const app = express()
const fs = require('fs')

app.get('/home',(req,res)=>{
    let datos = fs.readFileSync('./users.json','utf-8')
    console.log(JSON.parse(datos));
    res.json({msg:JSON.parse(datos)})
})
app.get('/',(req,res)=>{
    res.json(users)
})
app.get('/users/:id',(req,res)=>{
    let id =req.params.id;
    let datos = fs.readFileSync('./users.json','utf-8');
    let JsonData= JSON.parse(datos);
    let user = JsonData.filter(u=>u.id==id)
    if(user.length==0){
        res.json({msg:'No se esncuentra ese usuarios en la base de datos'})
    }else{
        res.json({user:user})
    }
    
})
app.listen(8080,()=>{
    console.log(`Escuchando en el puerto 8080`);
})