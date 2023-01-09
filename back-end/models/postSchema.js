const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    age: {
       type: Number,
       require: true
        }
})

module.exports = mongoose.model('post', postSchema)