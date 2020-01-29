var chatApi = require("../Schema/userSchema");

module.exports = {
  registerUser: function(data) {
    console.log("data>>", data);
    return new Promise((resolve, reject) => {
      chatApi
        .create(data)
        .then(result => {
          console.log(result);
          resolve(result);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }
};
