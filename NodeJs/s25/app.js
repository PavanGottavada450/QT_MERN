const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");

const app = express();
const port = 8989;

app.use(cors());
app.use(express.json());

function createMongooseConnection() {
  mongoose
    .connect("mongodb://localhost:27017/mongoose")
    .then(() => {
      console.log("connected successfully");
    })
    .catch((error) => {
      console.log(error);
      console.log("Error while connecting");
    });
}

createMongooseConnection();

app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log("server started", port);
});
