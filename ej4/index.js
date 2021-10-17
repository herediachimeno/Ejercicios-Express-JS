let express = require("express");
let app = express();

let saludo = require("./index-2.js");

app.get("/", function (req, res) {
  res.send(`<h2>${saludo()}<h2>`);
});

app.listen(4000);
