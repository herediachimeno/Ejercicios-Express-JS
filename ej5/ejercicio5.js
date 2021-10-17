const express = require("express");
const servidor = express();

const objeto = require("./objeto");

servidor.get("/nombre/:parametro", function (req, res) {
  objeto.nombre = req.params.parametro;
  res.send(objeto);
});

servidor.get("/apellidos/:parametro", function (req, res) {
  objeto.apellidos = req.params.parametro;
  res.send(objeto);
});

servidor.get("/edad/:parametro", function (req, res) {
  objeto.edad = parseInt(req.params.parametro);
  res.send(objeto);
});

servidor.listen(3004);
