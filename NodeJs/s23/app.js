const express = require("express");
const app = express();
const port = 8989;
const jwt = require("jsonwebtoken");
const secret_key = "qwertyuiopasdfghjkzxcvbnm";

app.get("/getdata", (req, res) => {
  res.send({
    name: "pavan",
    gender: "male",
  });
}); // http://localhost:8989/getdata

app.get("/login", (req, res) => {
  const token = jwt.sign({ name: "pavan", password: "pavan@123" }, secret_key);

  res.send({
    ok: true,
    result: token,
  });
}); // http://localhost:8989/login

app.get("/post", (req, res) => {
  const token = req.headers.authorization.slice(7);
  console.log(token);
  jwt.verify(token, secret_key, (error) => {
    if (error) {
      res.send({
        ok: false,
        result: "invalid token",
      });
    } else {
      res.send({
        ok: true,
        result: "successful",
      });
    }
  });
}); // http://localhost:8989/post

app.listen(port, () => {
  console.log("serevr started");
});
