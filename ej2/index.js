let express = require("express");
let app = express();

app.get("/:num", function (request, response) {
  let num = parseInt(request.params.num);
  let random = Math.floor(Math.random() * parseInt(num - 0) + 0);

  response.send(`Número aleatorio entre 0 y ${num}: ${random}`);
});

app.listen(4000);
