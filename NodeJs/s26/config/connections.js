const mongoose = require("mongoose");

function createConnection() {
  mongoose
    .connect("mongodb://localhost:27017/qtproducts")
    .then(() => {})
    .catch(() => {
      console.log("failed to connect");
    });
}

module.exports = createConnection;
