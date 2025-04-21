const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/testdb");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

app.post("/post", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("user saved to mongoDB");
});

