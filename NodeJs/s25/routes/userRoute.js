const express = require("express");
const route = express.Router();
const User = require("../model/userSchema");

route.post("/create", (req, res) => {
  const newuser = req.body;
  let user = new User(newuser);
  user
    .save()
    .then(() => {
      res.send({
        ok: true,
        result: "User Created",
      });
    })
    .catch((error) => {
      console.log(error);
      res.send({
        ok: false,
        result: "Failed to create User",
      });
    });
}); // http://localhost:8989/api/users/create

route.get("/getusers", (req, res) => {
  User.find()
    .then((data) => {
      res.send({
        ok: true,
        result: data,
      });
    })
    .catch((error) => {
      res.send({
        ok: true,
        result: error,
      });
    });
}); // http://localhost:8989/api/users/getusers

route.put("/update/:id", (req, res) => {
  User.updateOne(req.params, req.body)
    .then((data) => {
      res.send({
        ok: true,
        result: data,
      });
    })
    .catch((error) => {
      res.send({
        ok: true,
        result: error,
      });
    });
});

route.delete("/delete", (req, res) => {
  User.deleteOne(req.params)
    .then((data) => {
      res.send({
        ok: true,
        result: data,
      });
    })
    .catch((error) => {
      res.send({
        ok: true,
        result: error,
      });
    });
});

module.exports = route;
