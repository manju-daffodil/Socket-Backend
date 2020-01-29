var app = require("express")();
var bodyParser = require("body-parser");
var router = require("./Router/router");
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/ChatApp", {
  useNewUrlParser: true
});

app.use("/", router);

var server = app.listen(8888, (req, res) => {
  var port = server.address().port;
  console.log("Server is running at...", port);
});
