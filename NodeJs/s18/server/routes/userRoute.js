const express = require("express");
const route = express.Router();

route.get("/getusers",(req,res) => {
    res.send("<h2>User Details </h2>");
});

route.get("/getoneusers", (req, res) =>{
    res.send("<h2>One User Info </h2>");
});

module.exports = route;