const express = require("express");

const app = express();

app.use(express.json());

let users = [];

app.get("/", (req, res) => {
  res.send(users);
}); // http://localhost:8989/

app.post("/post", (req, res) => {
  users.push(req.body);
  res.send("user added");
});

app.put("/put/:id", (req, res) => {
  users[req.params.id] = req.body;
  res.send("user updated");
});

app.delete("/delete/:id", (req, res) => {
  users.splice(req.params.id, 1);
  res.send("user deleted");
});

app.listen(8989, () => {
  console.log("server stated");
});
