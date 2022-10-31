const ConnectDb = require('./mongoC')
ConnectDb()
const user = require('./Schemas')
const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.get('/', (req, res) => {
    res.send('OK, Server is running!')
    res.end()
}).listen(4000, (err, reso) => {
    console.log('Server IS Running...');
})
let myUser = "kuch nahi mila"
app.post('/', async (req, res) => {
    myUser = new user(req.body)
    myUser.save().then(() => {
        console.log("User Saved");
    })
})

app.get('/users' ,async (req , res)=>{
    let users = await user.find({})
    res.status(200).json(users)
})
