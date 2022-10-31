import axios from 'axios'
let senddata = async (x) => {
    await axios.post("http://localhost:4000/", x)
}

let receivedata = async ( ) => {
    let data = await axios.get('http://localhost:4000/users')
    return data.data
}

export { senddata, receivedata }