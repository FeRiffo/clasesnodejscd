const {escribirArchivo, sumar,saludo} = require('./app');
const app = require('./app')
const op = require('./operaciones')
escribirArchivo('hola estamos desde index.js')
console.log(sumar(10,25));
console.log(op.calcular(10,35,'+'));
console.log(op.calcular(10,35,'*'));
console.log(op.calcular(10,35,'-'));
console.log(op.calcular(10,35,'/'));
console.log(saludo);
console.log(app.escribirArchivo('ya no lo vamos a sobre escribir más'));
