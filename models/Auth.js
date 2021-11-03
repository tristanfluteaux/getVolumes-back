const mongoose = require('mongoose')

const guitarSchema = new mongoose.Schema({
    // _id : {
    //     type: String,
    //     required: true
    // },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    color : {
        type: String,
        required: true
    },
    quantity : {
        type: String,
        require: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type:String,
        required: true
    }
})

module.exports = mongoose.model('auth', authSchema)