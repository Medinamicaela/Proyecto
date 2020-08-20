const express = require('express');

const router = express.Router();
const {logueado} = require('../models/logins');

router.get('/',async(req,res) => {
    try{
        res.render('index');
    }catch(error){
        console.log(error);

    }

});

router.post('/',async(req,res,next)=>{
    var usuario = req.body.usuario;
    var password = req.body.password;
    const resultado = await logueado (usuario,password);

    if(resultado.length == 1){
     console.log('logueado');
       
     if(resultado[0].admin == 1){
          req.session.admin = true;
         res.redirect('/admin/productos');
        
        }else {
          req.session.admin = false;
          res.redirect('/');
        }
        

    }else {
        console.log("Usuario o contraseña incorrectas")
    }


});



module.exports = router;