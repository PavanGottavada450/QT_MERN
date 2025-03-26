const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

// const secret_key = "qwertyuioplkjhgfdsazxcvbnm";
dotenv.config({ path: "./config.env" });

const secret_key = process.env.SECRET_KEY;
const port = process.env.PORT;

const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");

// const port = 8989;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoute);
// http://localhost:8989/products/getdata
// http://localhost:8989/products/newproduct

app.use("/users", userRoute);
//http://localhost:8989/users/getusers
// http://localhost:8989/users/getoneusers

app.get("/login", (req, res) => {
  const token = jwt.sign({ name: "pavan", pass: "pa1@23" }, secret_key);
  res.send({
    ok: true,
    result: token,
  });
  // res.send("auth working")
}); // http://localhost:8989/login

app.listen(port, () => {
  console.log("Server Started");
});
