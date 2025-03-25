const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/get", (req, res) => {
  console.log("get request");
}); //http://localhost:8989/get

app.listen(8989, () => {
  console.log("server started");
});
