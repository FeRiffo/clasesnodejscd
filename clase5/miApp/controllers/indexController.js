const nombres = ["Fernanda","Luis","Yamile","Jacqueline"]
let mascotas = [
  {id:1,nombre:"Firulais",edad:3,duenio:"Luis Navas"},
  {id:2,nombre:"Garfield",edad:2,duenio:"Luis Navas"},
  {id:3,nombre:"Luna",edad:2,duenio:"Fernanda"}
]
const controller ={
    index:function(req, res, next) {

        res.render('index', {
          nombres:nombres, 
          title: 'Mi negocio online',
          mascotas:mascotas
          });
      },
      add:(req,res)=>{
        let info = req.body;
        mascotas=[...mascotas,info]
        res.send(info)
    },
    update:(req,res)=>{
        let id=Number(req.params.id);
        let info= req.body;
        for (let i = 0; i < mascotas.length; i++) {
            if(mascotas[i].id===id){
                mascotas[i]=info;
                res.send(mascotas[i]);
            }
        }
        res.send('No hay registro con esos datos')
    },
    delete:(req,res)=>{
        let id = Number(req.params.id);
        let newInfo = mascotas.filter((m)=>m.id!==id);
        mascotas=newInfo;
        res.send(mascotas)
    }
}
module.exports=controller