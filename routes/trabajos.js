const express = require('express');
// const { getProducts } = require('../models/producto');
// const pool = require('../utils/bd');
const router = express.Router();
const serviceProducts = require('./../models/producto');


router.get('/single/:id', async (req,res)=>{
 const id = req.params.id;
 const producto = await serviceProducts.getProduct(id);

 res.render('trabajo',{producto});
})

router.get('/all/', async (req,res)=>{

});



module.exports = router;