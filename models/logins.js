const pool = require("../utils/bd");

const logueado = async(usuario,password)=>{
    try{
        const query = "SELECT * FROM ?? WHERE usuario = ? AND password = ?"
        const params = [process.env.TABLA_USUARIO,usuario,password];
        return await pool.query(query,params);

    }catch(error){
        console.log(error)

    }
};

const create = async (obj) => {
    try{
     const query = "INSERT INTO ?? SET ?";
     console.log(obj);
     const params = [process.env.TABLA_USUARIO,obj];
     return await pool.query(query,params);

    }catch(error){
        console.log(error)
    }
   
};


module.exports = {
    logueado,
    create,
};
