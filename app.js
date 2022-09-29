const express = require("express");
const app = express();
const PORT = 3003;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;
db.on("error", () => {
  console.log("Algum erro ocorreu");
});
db.once("open", () => {
  console.log(db.name);
});
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
