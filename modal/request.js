const mongoose = require("mongoose");


const demoSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    plan: String,


    status: {
        type: String,
        enum: [
            "new",
            "contacted",
            "closed"
        ],
        default: "new"
    }

}, {
    timestamps: true
})


module.exports = mongoose.model("DemoRequest", demoSchema);