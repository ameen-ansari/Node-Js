const localHost = () => {
    const http = require('http')
    http.createServer((req, res) => {
        // res.writeHead(200, { 'Contant-Type': 'application/json' })
        // res.write(JSON.stringify({ Name: "Ameen", name: 'chana' }))
        res.write("Hello World")
        res.end()
    }).listen(80, (err, res) => {
        console.log('Server Is Running...');
    })
}
module.exports = localHost;