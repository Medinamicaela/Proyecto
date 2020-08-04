const express = require('express');

const router = express.Router();
const { logueado } = require('../models/logins');

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
    const result = await logueado(usuario,password);

    if(result.length == 1){
        console.log('logueado');
        
        if(result[0].admin == 1){
            req.session.administrador = true;
            res.redirect('/admin/productos');
    
        }else {
            req.session.administrador = false;
            res.redirect('/');
        }

    }else {
        console.log("Usuario o contraseña incorrectas")
    };


});



module.exports = router;