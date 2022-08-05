const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    name:String,
    desc:String,
    duration:String,
    fees:Number
})

module.exports = mongoose.model('course',courseSchema);