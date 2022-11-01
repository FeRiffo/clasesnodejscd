const express = require('express')
const app = express();
let data =[]
let id=0;
const PORT = 8080 || env.proccess.PORT 
app.get('/',(req,res)=>{
    res.json(data)
})
app.get('/add',(req,res)=>{
    let obj =req.query;
    obj.id=++id
    data=[...data,obj]
    res.send('Se agregaron los datos')
})
app.get('/update/:id',(req,res)=>{
    let id =req.params.id;
    // data.forEach((ob,index)=>{
    //     if(ob.id===Number(id)){
    //         data[index]=req.query
    //     }
    // })
    for (let i = 0; i < data.length; i++) {
        if(data[i].id===Number(id)){
            res.send('Se actualizó el dato')
        }
    }
    res.send('No existe ese usuario')
})
app.get('/delete/:id',(req,res)=>{
    let id =req.params.id;
    let newData = data.filter(ob=>ob.id!==Number(id));
    data=newData;
    res.send('Se eliminó el dato')
})
app.get('/deleteAll',(req,res)=>{
    data=[]
    res.send('Se elimnó todo')
})
//agregamos el puerto
app.listen(PORT,()=>{
    console.log(`Se está ejecutando el servidor por elpuerto ${PORT}`);
})