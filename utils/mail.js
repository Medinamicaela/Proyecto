"use strict";
const nodemailer = require("nodemailer");

async function main(obj) {
  let testAccount = await nodemailer.createTestAccount();

  try {
      const transporter = nodemailer.createTransport({
          host: process.env.SMTP,
          port: process.env.PORT_MAIL,
          secure: false, 
          auth: {
           user: process.env.USER_MAIL,
           pass: process.env.PASSWORD_MAIL,
           },
        });
    
     
      let info = await transporter.sendMail({
          to: obj.to, 
          subject: obj.subject,
        //   text: "Hello world?", // plain text body
          html: obj.html,
        });
        
      //    console.log("Message sent: %s", info.messageId);
       return info.messageId;

    } catch(error){
        console.log(error);
    }
 
}

module.exports = {
   main,

}
