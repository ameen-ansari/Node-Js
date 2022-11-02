import axios from 'axios'
let senddata = async (x) => {
    await axios.post("http://localhost:4000/users", x)
}

let receivedata = async () => {
    let data = await axios.get('http://localhost:4000/users')
    return data.data
}

let deletedata = async () => {
    await axios.get('http://localhost:4000/users/reset')
}


export { senddata, receivedata, deletedata }