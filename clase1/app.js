const fs = require('fs');//módulo nativo
const saludo ="Hola estamos dentro de node y estamos escribiendo un archivo"

const escribirArchivo=(data)=>{
    fs.writeFileSync('./data.txt',data);
    return true
}
const sumar=(a,b)=>a+b
const dividir=(a,b)=>a/b
const restar=(a,b)=>a-b
const multiplicar=(a,b)=>a*b


// fs.promises.writeFile('./data.txt','reescribimos el archivo data.txt')
// .then(()=>console.log('se reescriobió el archivo'))
// .catch(error=>console.log(error))

module.exports = {escribirArchivo,sumar,saludo,dividir,multiplicar,restar}