const express = require("express");
const cors = require("cors");
const port = 8978;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/user", (req, res) => {
  const user = req.body;
  console.log(user);
  res.send({
    ok: true,
    result: "Working",
  });
});

app.listen(port, () => {
  console.log("Server Started");
});
