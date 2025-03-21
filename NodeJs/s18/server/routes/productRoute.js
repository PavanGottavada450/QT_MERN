const express = require("express");
const route = express.Router();
const createConnection = require("../config/connection");

route.get("/getdata", async (req, res) => {
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

route.post("/newproduct", async (req, res) => {
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

module.exports = route;
