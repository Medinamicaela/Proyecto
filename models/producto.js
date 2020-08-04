const pool = require('../utils/bd');

getProducts = async ()=> {
    try {
        const query = "SELECT producto.id,producto.nombre,producto.descripcion,producto.precio,producto.imagen,categoria.nombre as nombre_categoria FROM ?? JOIN ?? ON producto.id_categoria=categoria.id order by id desc";
        
        const rows = await pool.query(query,[process.env.TABLA_PRODUCTO,process.env.TABLA_CATEGORIAS]);
        return rows; 

    } catch (error) {
        console.log(error);

    }
};

getProduct = async(id)=>{
    try {
        const query= "SELECT id,nombre,descripcion,precio,imagen FROM ?? where id = ?"
        const params=[process.env.TABLA_PRODUCTO,id];
        const rows = await pool.query(query,params);
        return rows[0];
        
    } catch (error){
     console.log(error)
    }
};

const update = async(id,obj)=> {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.TABLA_PRODUCTO,obj,id];
    return await pool.query(query,params);
}

const create = async (obj) => {
    const query = "INSERT INTO ?? SET ?";
    console.log(obj);
    const params = [process.env.TABLA_PRODUCTO,obj];
    const rows = await pool.query(query,params);
    return rows.insertId;
}

module.exports= {
    getProducts,
    getProduct,
    create,
    update,
};