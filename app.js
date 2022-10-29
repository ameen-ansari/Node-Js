// const localHost = require('./Components/CreateS')
const Mongo = require('./Components/Mongo')
const express = require('express')
let App =async () => {
    let app = express()
    // localHost()
    let data = await Mongo()
    app.get('/', (req, res) => {
        res.write('hello World')
        res.end()
    })
    app.set('view engine', 'ejs')
    app.get('/Home', (req, res) => {
        res.render('Home' , {data})
    })
    app.listen(80, (err, res) => {
        console.log('Server Is Running...');
    })
}
App()