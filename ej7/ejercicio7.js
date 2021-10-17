const express = require("express");
const servidor = express();

let array = require("./array");
let funcion = require("./funcion");

servidor.get("/sumar", function (req, res) {
  let num = funcion();
  array[num] += 1;
  res.send(array);
});

servidor.listen(3006);
