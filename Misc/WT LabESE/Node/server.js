var express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  service = require("./service.js");
app.use(bodyParser.json());
app.use(express.static("../public"));
service.attachService(app);
app.listen(3000);
console.log("server at http://localhost:3000");
