const express = require('express');
const router = express.Router();
const serviceProducts = require('./../models/producto');


router.get('/single/:id', async (req,res)=>{
 const id = req.params.id;
 const producto = await serviceProducts.getProduct(id);

 res.render('trabajo',{producto});
})

router.get('/all', async (req,res)=>{
    try{
        const productos = await serviceProducts.getProducts();
        res.render ('trabajos',{productos});

    }catch(error) {
        console.log(error)
    };
   
    

});



module.exports = router;