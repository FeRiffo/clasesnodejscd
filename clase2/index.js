const fs = require('fs')
const path = require('path')
const users = require('./users')

// fs.mkdirSync('../src')
// fs.rmdirSync('../src')
// fs.existsSync
let numeros =[23,56,7,890,45]

numeros.forEach((numero)=>{
    const PI=3.14
    console.log(numero*PI)
})
let numPi =numeros.map((n)=>{
    const PI=3.14
    return n * PI
})
console.log(numPi);
let numeros2 =[1,2,3,4]
let numFiltrados = numeros2.filter(n=>n!=2)
/**spreat oprator */
numFiltrados=[125,...numFiltrados,300]
console.log(numFiltrados);
let nombres=["Luis","Juan","Pedro"];

console.log(nombres.filter((n)=>n!="Luis"));//eliminar
console.log(nombres.filter((n)=>n=="Pedro"));//read un solo registro
console.log(nombres.find((n)=>n=="Luis"));

console.log(path.join(__dirname,'clase1'));
console.log(__dirname+"/src");
const msg =(nombre)=>{
    return `Hola, ${nombre}, cómo te va?`

}
console.log(msg('Julián José'));
const buscar=(id)=>{
    return users.find(u=>u.id==id)
}
console.log(buscar(2));
console.log('---------------');
console.log(buscar(3));


