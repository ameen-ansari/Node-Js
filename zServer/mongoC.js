const mongoose = require('mongoose')
const user = require('./Schemas')
const ConnectDb = () => {
    mongoose.connect('mongodb://localhost/Demo')
    // let user1 = new user({
    //     name: 'bajwa',
    //     pro: 'foji',
    //     scale: 243
    // })
    // user1.save().then(() => {
    //     console.log('user saved');
    // })
}
module.exports = ConnectDb