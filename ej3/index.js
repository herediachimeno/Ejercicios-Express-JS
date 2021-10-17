let express = require("express");
let app = express();

let lista = ["Carlos", "Sílvia", "Dídac", "Nil", "Olivia"];

app.get("/persona", function (req, res) {
  let respuesta = "";
  for (let i = 0; i < lista.length; i++) {
    respuesta += `<li>${lista[i]}</li>`;
  }
  res.send(`<ul>${respuesta}</ul>`);
});

app.listen(4000);
