var app = require("express")();
var http = require("http").createServer(app);
var bodyParser = require("body-parser");
var io = require("socket.io")(http);

var mongoose = require("mongoose");
let users = {};
app.get("/", (req, res) => {
  res.send("Welocone to this link");
});

io.on("connection", socket => {
  console.log("Connected");
  socket.on("addUser", data => {
    users[data.name] = socket.id;
    console.log("Data from frontend>>>", users);
  });
  socket.on("send_Message", data => {
    console.log(">>>>chat message", data);
    io.to(users[data.receiver]).emit("chat_message", {
      message: data.message,
      name: data.sender
    });
  });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var server = http.listen(9999, (req, res) => {
  let port = server.address().port;
  console.log("Server is running at ", port);
});
