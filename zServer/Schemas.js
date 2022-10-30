const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:String,
    pro:String,
    scale:Number
})
module.exports = mongoose.model("user",userSchema)