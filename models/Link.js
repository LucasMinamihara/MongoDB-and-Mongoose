const mongoose = require("mongoose");
const linkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  click: { number: 0, default: 0 },
});
module.exports = mongoose.model("Link", linkSchema);
