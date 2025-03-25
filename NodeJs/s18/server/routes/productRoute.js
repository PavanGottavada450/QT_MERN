const express = require("express");
const route = express.Router();
const createConnection = require("../config/connection");
const { ObjectId } = require("mongodb");

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

route.put("/update", async (req, res) => {
  var id;
  var newPrice;
  var newrating;

  id = req.body.id;
  newPrice = req.body.price;
  newrating = req.body.rating;

  var coll = await createConnection();

  coll
    .updateOne(
      { _id: new ObjectId(id) },
      { $set: { rating: newrating, price: newPrice } }
    )
    .then((resp) => {
      res.send({
        ok: true,
        result: "Update successfully",
      });
    })
    .catch((error) => {
      res.send({
        ok: false,
        result: "failed to update",
      });
    });
}); // http://localhost:8989/update

route.delete("/delete", async (req, res) => {
  var id = req.body.id;
  const coll = await createConnection();

  coll
    .deleteOne({ _id: new ObjectId(id) })
    .then(() => {
      res.send({
        ok: true,
        result: "delete",
      });
    })
    .catch((err) => {
      res.send({
        ok: false,
        result: "failed to delete",
      });
    });
});

module.exports = route;
