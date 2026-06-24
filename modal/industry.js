const mongoose = require("mongoose");

const industrySchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String
});

module.exports = mongoose.model("Industry", industrySchema);