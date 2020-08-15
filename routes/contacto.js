const express = require('express');
const router = express.Router();
const { main } = require('./../utils/mail');

router.get('/',(req,res) => {
    res.render('contacto');
});

router.post('/',async (req,res) =>{
    const {email,mensaje} = req.body;
    const to = process.env.ADMIN_MAIL;
    const subject = "Nuevo mesaje desde el sitio web";
    const html = "Se contactaron desde ${email} con la siguiene consulta: ${mensaje}";
    const resultMail = await main({to,subject,html});

    res.render("contacto",{massage: "Mensaje enviado,en breve nos contactaremos con usted"});
});

module.exports=router;