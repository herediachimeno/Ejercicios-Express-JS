const express = require("express");
const servidor = express();

let estudiantes = ["Sílvia", "Carlos", "Alfredo", "Guille", "Cristina"];

servidor.get("/profesores/:parametro", function (req, res) {
  estudiantes.push(req.params.parametro);
  res.send(estudiantes);
});

servidor.listen(3005);
