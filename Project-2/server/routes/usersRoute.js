const express = require("express");
const bcrypt = require("bcryptjs");
const route = express.Router();
const jwt = require("jsonwebtoken");
const createConnection = require("../config/connection");
const secret_key = "asdfghjkqwertyuiop";

// route.post("/signup", async (req, res) => {
//   const newuser = req.body;
//   const collection = await createConnection();
//   collection
//     .insertOne(newuser)
//     .then(() => {
//       res.status(201).json({
//         ok: true,
//         results: "User Created",
//       });
//     })
//     .catch((error) => {
//       res.status(500).json({
//         ok: false,
//         results: "Failed to Create user",
//         error: error.message,
//       });
//     });
// }); // http://localhost:8989/api/users/signup

// route.post("/signin", async (req, res) => {
//   const user = req.body;
//   const collection = await createConnection();
//   collection
//     .findOne(user)
//     .then((resp) => {
//       // console.log(resp);
//       var token = jwt.sign(user, secret_key);
//       res.send({
//         ok: true,
//         message: "user Exist",
//         results: token,
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       res.send({
//         ok: false,
//         message: "User NOt Existed",
//         results: null,
//       });
//     });
// });  // http://localhost:8989/api/users/signin

route.post("/signup", async (req, res) => {
  const { fname, lname, email, password, phone, gender } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ ok: false, message: "Email and password required" });
  }

  try {
    const collection = await createConnection();
    const existingUser = await collection.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ ok: false, message: "User already exists" });
    }

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    await collection.insertOne({
      fname,
      lname,
      email,
      password: hashedPassword, // Save hashed password
      phone,
      gender,
    });

    res.json({ ok: true, message: "User created successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ ok: false, message: "Internal Server Error" });
  }
});

route.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ ok: false, message: "Email and Password are required" });
  }

  try {
    const collection = await createConnection();
    const user = await collection.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ ok: false, message: "User does not exist" });
    }

    console.log("Stored hashed password:", user.password); // Debugging
    console.log("Entered password:", password); // Debugging

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ ok: false, message: "Incorrect password" });
    }

    const token = jwt.sign(
      { email: user.email, password: user.password },
      secret_key
    );

    res.json({ ok: true, message: "User exists", token });
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({ ok: false, message: "Internal Server Error" });
  }
});

module.exports = route;
