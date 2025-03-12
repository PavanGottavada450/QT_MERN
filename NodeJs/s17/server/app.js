const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const port = 8989;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/getdata", (req, res) => {
  client
    .connect()
    .then(() => {
      console.log("Connected Successfully to Mongodb server");
    })
    .catch((error) => {
      console.log("failed to connect with server");
      console.log(error);
    });

  const db = client.db("node17");
  const coll = db.collection("products");

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
        result: "Something went wrong while accessing the data",
      });
    });
}); // http://localhost:8989/getdata

app.listen(port, () => {
  console.log("Server Started");
});
