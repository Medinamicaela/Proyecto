const express = require('express');
const router = express.Router();
const {create} = require('../models/logins');

router.get('/',async(req,res) => {
    res.render('registro');
});

router.post('/',async (req,res) => {
   
        try{
            const {usuario,nombre,correo,password,fecha,telefono,pais,foto} = req.body;
            const obj = {
                usuario,
                nombre,
                correo,
                password,
                fecha,
                telefono,
                pais,
                foto,
                admin: 0,
            };
            const result = await create(obj);
            res.json({ success: true });

            //res.render("index",{message : "Bienvenido"});

        }catch(error){
            res.json({ success: false });
            console.log(error)
        }    

});


module.exports=router;