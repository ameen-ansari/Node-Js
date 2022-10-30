const ConnectDb = require('./mongoC')
ConnectDb()
const user = require('./Schemas')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.get('/', (req, res) => {
    res.send('OK, Server is running!')
    res.end()
    route.post('/', () => {
        console.log('recevied');
    })
}).listen(4000, (err, reso) => {
    console.log('Server IS Running...');
})

app.post('/', async (req, res) => {
    const myUser = new user(req.body)
    myUser.save().then(() => {
        console.log("User Saved");
    })
})