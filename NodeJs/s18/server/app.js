const express = require("express");
const cors = require("cors");
const createConnection = require("./config/connection");

const port = 8989;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/getdata", async (req, res) => {
  const productColl = await createConnection();

  productColl
    .find({})
    .toArray()
    .then((data) => {
      res.json({
        ok: true,
        result: data,
      });
    })
    .catch((error) => {
      res.json({
        ok: false,
        result: "Something went wrong while accessing the data",
      });
    });
}); // http://localhost:8989/getdata

app.post("/newproduct", async (req, res) => {
  const newProduct = req.body;

  try {
    const productColl = await createConnection();
    const data = await productColl.insertOne(newProduct);

    res.send({
      ok: true,
      result: "inserted successfully",
      data: data,
    });
  } catch (error) {
    res.send({
      ok: false,
      result: "something went wrong",
    });
  }
}); // http://localhost:8989/newproduct

app.listen(port, () => {
  console.log("Server Started");
});
