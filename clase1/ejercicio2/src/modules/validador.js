const usuario={
    nombre:"Luis",
    apellido:"Navas",
    clave:"123456",
    email:"lpipnavas@gmail.com"
}
const ingresar=(us)=>{
    let msgError=`Estimado ${us.nombre} ${us.apellido} no se encuentra registrado en nuestra base de datos`
    if(us.email===usuario.email && us.clave===usuario.clave){
        return `Bienvenid@ ${us.nombre} ${us.apellido} a la plataforma`
    }else{
        return msgError;
    }
}

export default ingresar
