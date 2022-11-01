const {sumar,restar,multiplicar,dividir} = require('./app');
module.exports={
    calcular:(a,b,op)=>{
        if(op==='+'){
            return sumar(a,b)
        }else if(op==='*'){
            return multiplicar(a,b)
        }
        else if(op==='-'){
            return restar(a,b)
        }else if(op==='/'){
            return dividir(a,b)
        }else{
            return ' no existe esa operación'
        }
        
    }
}