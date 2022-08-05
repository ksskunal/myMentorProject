const mongoose = require('mongoose')

const mentorSchema = mongoose.Schema({
    name:String,
    username:String,
    password:String,
    experince:String
})

module.exports = mongoose.model('mentor',mentorSchema);