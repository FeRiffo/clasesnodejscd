const http = require('http');
const PORT = 8080;
const app = http.createServer((req,res)=>{
    
    if(req.url === '/' && req.method === 'GET'){
        res.setHeader('Content-type','text/plain');
        res.write('<h1>Hola</h1>')
        res.end()
    }else if(req.url === '/perfil'){
        res.setHeader('Content-type','text/html');
        res.write(`<form action="/" >
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" name="text" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" name="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>`)
        res.end()
    }else if(req.url === '/eliminar'){
        res.setHeader('Content-type','text/html');
        res.write('<h1>Eliminar</h1>')
        res.end()
    }else{
        res.setHeader('Content-type','text/html');
        res.write('<h1>Error 404</h1>')
        res.end()
    }
   
}).listen(PORT,()=>{
    console.log(`Escuchando por el puerto ${PORT}`);
    
})
