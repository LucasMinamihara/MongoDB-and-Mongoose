const express = require("express");
const app = express();
const PORT = 3003;
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/newLink");
let db = mongoose.connection;

const linkSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  click: Number,
});

const Link = mongoose.model("Link", linkSchema);

let link = new Link({
  click: 0,
  title: "",
  description: "",
  url: "",
  __v: 0,
});

link
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });

db.on("error", () => {
  console.log(error);
});
db.once("open", () => {
  console.log("Você conseguiu logar no banco de dados!");
});

app.get("/", (req, res) => {});
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
