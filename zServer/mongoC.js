const mongoose = require('mongoose')
const user = require('./Schemas')
const ConnectDb =async () => {
    let connection = await mongoose.connect('mongodb://localhost/Demo')
}
module.exports = ConnectDb