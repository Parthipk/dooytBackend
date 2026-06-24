const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
  id: String,
  name: String,
  category: String,
  icon: String,
  description: String
});

module.exports = mongoose.model("Module", moduleSchema);