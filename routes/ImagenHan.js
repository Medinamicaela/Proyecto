var express = require("express");
var router = express.Router();
const imgHandler = require("./../utils/imagenH");
const multer = require("multer");
const config = { dest: "./public/tmp" };
const upload = multer(config);

router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});

router.post("/", upload.single("foto"), (req, res) => {
  const { nombre, descripcion } = req.body;
  const img = imgHandler.saveImage(req.file);
  console.log(`Imagen guardada como ${img}`);
  const obj = {
    nombre,
    descripcion,
    imagen: img,
  };
  
  res.send();
});

module.exports = router;