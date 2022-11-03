const mongoose = require('mongoose')
const user = require('./Schemas')
const ConnectDb = async () => {
    try {
        let connection = await mongoose.connect('mongodb://localhost/Demo' , ()=>{
            console.log('Database Connected');
        })
    } catch (e) {
        alert('Error In Mongo C')
        console.log('Error In Mongo C');
    }
}
module.exports = ConnectDb