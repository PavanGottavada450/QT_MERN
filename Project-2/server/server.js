const express = require("express");
const cors = require("cors");
const UsersRoutes = require("./routes/usersRoute");
const port = 8989;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", UsersRoutes);

app.listen(port, () => {
  console.log("serevr started");
});
