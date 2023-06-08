const express = require("express");
const app = express();
var addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  var result = addDays(new Date(), 100);
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;

app.listen(3000);
