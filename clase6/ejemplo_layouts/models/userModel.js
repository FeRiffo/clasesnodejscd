const users= require('../db/usuarios.json');
module.exports={
    getUser:(email)=>{
        for (let index = 0; index < users.length; index++) {
            if(users[index].email===email){
                return users[index]
            }
        }
        return undefined;
    },
    getUserById:(id)=>{
        for (let index = 0; index < users.length; index++) {
            if(users[index].id===id){
                return users[index]
            }
        }
        return undefined;
    }
}