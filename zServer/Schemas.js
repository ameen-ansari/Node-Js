const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    UserName: String,
    phoneNumber: String,
    mail: String,
    password: String
})
module.exports = mongoose.model("user",userSchema)