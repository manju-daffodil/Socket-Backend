var express = require("express");
var router = express.Router();
var chatDetails = require("../Api/chatApi");

router.post("/register", async function(req, res) {
  try {
    console.log("Req.body>>", req.body);
    var result = await chatDetails.registerUser(req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
