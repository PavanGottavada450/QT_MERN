const express = require("express");
const cors = require("cors");
const createConnection = require("./config/connections");
const Product = require("./model/productsSchema");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res) => {
  Product.find()
    .then((data) => {
      res.send({
        ok: true,
        message: "successful",
        results: data,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send({
        ok: false,
        message: "failed to fetch data",
        results: null,
      });
    });
  // console.log("get request");
}); //http://localhost:8989/api/get

app.post("/post", (req, res) => {
  res.send("post request");
});

app.listen(8989, () => {
  createConnection();
  console.log("server started");
});
