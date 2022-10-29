const { MongoClient } = require('mongodb')
const Mongo = async () => {
    let url = "mongodb://localhost:27017"
    let client = new MongoClient(url)
    let mongoWithNjs = await client.connect()
    let db = mongoWithNjs.db('Demo')
    let collec = db.collection('firsttry')
    let data = await collec.find({}).toArray()
    return data
}
module.exports = Mongo