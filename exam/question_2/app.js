const express = require("express");
const cors = require("cors");

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const port = 8989;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/getdata", async (req, res) => {
  await client.connect();

  const db = client.db("exam");
  const coll = db.collection("Products");

  coll
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
        result: error,
      });
    });
}); // http://localhost:8989/getdata

app.post("/newdata", async (req, res) => {
  const newdata = req.body;

  try {
    await client.connect();
    const db = client.db("exam");
    const coll = db.collection("Products");

    const data = await coll.insertOne(newdata);

    res.send({
      ok: true,
      result: "inserted succcessfully",
      data: data,
    });
  } catch (error) {
    res.send({
      ok: false,
      result: error,
    });
  }
}); // http://localhost:8989/newdata

app.put("/updatedata/:id", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("exam");
    const coll = db.collection("Products");

    const { id } = req.params;
    const updatedData = req.body;

    const result = await coll.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );

    res.json({ ok: true, result: "Updated successfully", data: result });
  } catch (error) {
    res.json({ ok: false, result: error.message });
  }
}); // http://localhost:8989/updatedata/:id

app.delete("/deletedata/:id", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("exam");
    const coll = db.collection("Products");

    const { id } = req.params;
    const result = await coll.deleteOne({ _id: new ObjectId(id) });

    res.json({
      ok: true,
      result: "Deleted successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      ok: false,
      result: error.message,
    });
  }
});  // http://localhost:8989/deletedata/:id

app.listen(port, () => {
  console.log("server statred successfully");
});
