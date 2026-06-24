const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
    id: String,
    name: String,
    role: String,
    rating: Number,
    quote: String
});

module.exports = mongoose.model("Testimonial", testimonialSchema);