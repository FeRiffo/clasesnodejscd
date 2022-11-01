const userModel = require('../models/userModel')
const controller = {
    login: function (req, res, next) {
        res.render('login',{title:"Ingresar",error:''});
    },
    loginPost: function (req, res, next) {
        let user = userModel.getUser(req.body.email);
        if(user === undefined){
            res.redirect('/');
        }else{
            if(user.password==req.body.password){
                res.locals.user=user;//vista
                req.session.user=user;//servidor
                res.cookie(
                    'userId',
                    user.id,
                    {maxAge:1000*60*5}
                )//cliente
                res.render('index',{title:"mi App",user:user})
            }else{
                res.render('login',
                {
                    title:"Ingresar",
                    error:"La contraseña es incorrecta!"
            })
            }
        }
        
    },
    register: function (req, res, next) {
        res.send('respond with a resource');
    },
    registerPost: function (req, res, next) {
        res.redirect('/');
    },
    logout:(req,res)=>{
        req.session.user=undefined;
        res.locals.user=undefined;
        res.clearCookie('userId')
        res.redirect('/')
    }
}
module.exports = controller