const express = require("express");
const servidor = express();

let array = require("./array");
let funcion = require("./funcion");

servidor.get("/sumar", function (req, res) {
  let num = funcion();
  array[num] += 1;
  res.send(array);
});

servidor.get("/borrar/:numero", function (req, res) {
  let numero = parseInt(req.params.numero);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === numero) {
      array[i] = 0;
    }
  }
  res.send(`El número introducido se ha puesto a 0: ${array}`);
});

servidor.listen(3007);
