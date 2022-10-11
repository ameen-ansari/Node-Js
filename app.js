// const fs = require('fs')
// let text = fs.readFileSync('./app.txt' , "utf-8" )
// text = fs.writeFileSync('./app.txt' , "By Ameen Developer")
// text = fs.writeFileSync('./ap.js' , "let sunS = (a,b) => {let sum = a+b; console.log(sum) ;return sum } ;sunS(12 ,8)")
// console.log(text);

// const os = require('os')
// let a = os.version()
// a = os.userInfo()
// a = os.uptime()
// a = os.type()
// a = os
// console.log(a);
//Creating A server
// const http = require('http')
// http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader("Content-Type", "text/html")
//     res.end('<h1>Hello World</h1><p>hello Try First backend Web On Browser</p>')
// }).listen(80, '127.1.2.3', () => {
//     console.log("Server Started...");
// })

const express = require('express')
let app = express()
app.get("/",(req , res)=>{
res.send('Hello World')
})
app.get("/about",(req , res)=>{
res.send('Welcome in about')
})
app.get("/servises",(req , res)=>{
res.send('Welcome in services')
})
app.listen(80)