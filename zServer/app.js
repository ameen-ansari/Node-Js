const ConnectDb = require('./mongoC')
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const user = require('./Schemas')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
ConnectDb()

app.get('/', async (req, res) => {
    res.send('Ok,Server Is Running')
    res.end()
}).listen(4000, (err, reso) => {
    console.log('Server IS Running...');
})

let myUser = "kuch nahi mila"

app.post('/users', async (req, res) => {
    myUser = new user(req.body)
    await myUser.save()
    console.log('User added');
})

app.get('/users/usersdata', async (req, res) => {
    let users = await user.find({})
    res.send(JSON.stringify(users))
})

app.get('/users/reset', async (req, res) => {
    res.send('Reset')
    user.deleteMany({}, () => {
        console.log('users removed')
    });
})


