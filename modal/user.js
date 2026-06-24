
const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    passowrd: {
        type: String
    },
    accessToken: {
        type: String
    },
    refreshToken: {
        type: String
    },
}, { timestamp: true })

module.exports = mongoose.model('User', userschema)