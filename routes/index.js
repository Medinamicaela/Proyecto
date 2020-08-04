const express = require('express');
const router = express.Router();
const productoService= require('./../models/producto');
const {getTestimonios} = require('./../models/testimonio');


/* GET home page. */
router.get('/',async (req,res)=> {

  const productos = await productoService.getProducts();
  const testimonios = await getTestimonios();
  res.render('index',
  {productos,
  testimonios,
  });
  
});

module.exports = router;
