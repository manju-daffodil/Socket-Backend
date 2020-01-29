var mongoose = require("mongoose");

var mySchema = mongoose.Schema({
  firstname: { type: String, unique: true },
  lastname: { type: String, unique: true }
});

module.exports = mongoose.model("chatUser", mySchema);
