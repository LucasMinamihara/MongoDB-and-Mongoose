const express = require("express");
const app = express();
const PORT = 3003;
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/newLink");
let db = mongoose.connection;
const path = require("path");
const linkRoute = require("./routes/linkRoutes");

db.on("error", () => {
  console.log(error);
});
db.once("open", () => {
  console.log("Você conseguiu logar no banco de dados!");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

app.use("/", linkRoute);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
