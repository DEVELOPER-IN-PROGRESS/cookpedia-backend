const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required: true
    },
    status:{
        type: String,
        default:'pending'
    }
})

const testimonial = mongoose.model('testimonail',testSchema)
module.exports = testimonial