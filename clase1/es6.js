function mostrarSaludo(){
    let nombre="Luis"
    return "Hola estamos dentro de mostrarSaludo soy: " + nombre
}
//arrow function
const saludando=(nombre)=>{
    return `Hola ${nombre}`
}
console.log(mostrarSaludo());
console.log(saludando("Juan"));

const sumar={// no crea el ambito this
    x:10,
    b:(a)=>{
        console.log(this.x + a,this);
    },
    c:function(a){
        console.log(this.x + a,this);
    }
}
sumar.b(25);
sumar.c(25);

//rest
const usuarios = (a,b,...r)=>r;
console.log(usuarios("Luis","Juan","el resto de los usuarios"));

//spreat operator

let array= ["Julián","Pedro","Jóse","Juliana","Nery"];

const otroArray= [...array,"Amada","Pedro pablo"]

const arrayes5=[]
arrayes5.push("Julián")

console.log(otroArray);
let nombre = 'Pedro';
const saludar = `hOLA ${nombre}`
console.log(saludar);   