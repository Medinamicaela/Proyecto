const express = require('express');
const router = express.Router();
const {getProducts, create, update} = require('./../../models/producto');
const {getCategorias} = require('./../../models/categorias');

router.get('/baja/:id', async (req,res)=> {
    try{
        const {id}= req.params;
        const result = await update(id, {estado: 0});
        res.redirect('/admin/productos');

    }catch (error){

        
    }
});

router.get('/alta',async(req,res) =>{

    const categorias = await getCategorias();
    res.render('altaproducto',{categorias});
});

router.post('/alta',async(req,res) =>{
    try{
        const {nombre,descripcion,id_categoria,precio,descuento} = req.body;
        const object = {
            nombre: nombre,
            descripcion: descripcion,
            id_categoria: parseInt(id_categoria),
            precio: precio,
            descuento: descuento,
        };
        const result = await create(object);

        res.render("altaproducto",{message : "Producto dado de alta"});

    }catch(error){
        console.log(error);
    }

    // console.log(req.body);

});


router.get('/',async(req,res) =>{
    if(req.session.administrador){
        try{
            const productos = await getProducts();
            // console.log(productos);
            res.render("adminprods",{productos});

        }catch(error){};

    
    }else{
        res.send("Accion no permitida")
    }
   

});


module.exports = router;