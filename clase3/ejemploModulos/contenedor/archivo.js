const fs = require('fs')
const escribirArchivo=(ruta,info)=>{
    fs.writeFileSync(ruta,info);
    return true
}
const eliminarArchivo=(ruta)=>{
    fs.unlinkSync(ruta)
    return true
}
module.exports = {escribirArchivo, eliminarArchivo}
