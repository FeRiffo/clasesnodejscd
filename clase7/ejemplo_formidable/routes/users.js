var express = require('express');
var router = express.Router();
const formidable = require('formidable');
const fs = require('fs');
const path = require('path')
let imagenes=[]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('formImg');
});
router.post('/upload',(req,res,next)=>{
  const form = formidable({uploadDir:'upload'});
  form.parse(req,(err,fields,files)=>{
    if(err){
      next(err);
      return;
    }
    let ext = path.extname(files.archivo.originalFilename);
    if(ext==='.png'){
      console.log('es un png');
   //la ruta del archivo hay que colocarla completa
   fs.renameSync(`${path.join(__dirname,'../upload/')}${files.archivo.newFilename}`,
                 `${path.join(__dirname,'../public/images/')}${fields.title}-${files.archivo.newFilename}${ext.toLowerCase()}`)
    imagenes=[...imagenes,`${path.join(__dirname,'../public/images/')}${fields.title}-${files.archivo.newFilename}${ext.toLowerCase()}`]
                 return res.json('archivo subido')
  }else{
    return res.send('el archivo no es una imagen')
  }
  })
})
router.get('/deleteAll',(req,res)=>{

  imagenes.forEach(im=>{
    if(fs.existsSync(im)){
    fs.unlinkSync(im)
  }
  
  });
  res.send('eliminado todo')
})

module.exports = router;
