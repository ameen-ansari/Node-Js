// const ConnectDb = require('./mongoC')
// ConnectDb()
const express = require('express')
const Router = require('express')
const cors = require('cors')
const app = express()
const route = express.Router()
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/' , route)
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.get('/', (req , res)=>{
    res.send('OK, Server is running!')
    res.end()
    console.log(abc);
    route.post('/',()=>{
        console.log('recevied');
    })
}).listen(4000 , (err , reso)=>{
    console.log('Server IS Running...');
})

app.post('/users', async (req, res) => {
    console.log("req.body", req.body);
    res.send({
        status:200,
        data:users || []
    })
})