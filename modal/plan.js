const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
    id: String,
    name: String,
    tagline: String,
    monthlyPrice: Number,
    currency: {
        type: String,
        default: "INR"
    },
    isPopular: Boolean,
    features: [String]
});

module.exports = mongoose.model("Plan", planSchema);