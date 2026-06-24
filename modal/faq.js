const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
    id: String,
    order: Number,
    question: String,
    answer: String
});

module.exports = mongoose.model("FAQ", faqSchema);