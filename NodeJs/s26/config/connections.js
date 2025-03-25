const mongoose = require("mongoose");

function createConnection() {
  mongoose
    .connect()
    .then(() => {})
    .catch(() => {
      console.log("failed to connect");
    });
}

module.exports = createConnection;
