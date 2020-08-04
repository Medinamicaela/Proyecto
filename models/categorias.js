const pool = require('./../utils/bd');

getCategorias = async () =>{
    try{
        const query = "SELECT id,nombre FROM categoria";
        const rows = await pool.query(query);
        return rows;


    }catch(error){
        console.log(error)

    };
};

module.exports = {
    getCategorias
};