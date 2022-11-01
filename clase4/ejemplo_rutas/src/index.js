const express = require('express')
const path = require('path')

const app = express();
const PORT = 8080 || env.proccess.PORT

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');

const productosRouter = require('./rutas/productos')
const indexRouter = require('./rutas/index')
const usersRouter = require('./rutas/users')

app.use('/',indexRouter)
app.use('/productos', productosRouter)
app.use('/users', usersRouter)


app.listen(PORT,()=>{
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
})

