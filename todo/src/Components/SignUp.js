import style1 from './Signup.module.css'
import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function SignUp() {
    const [uudata, setuudata] = useState([])
    const [udata, setudata] = useState({
        UserName: "",
        phoneNumber: "",
        mail: "",
        password: ""
    })
    let userdata = (e) => {
        let input = {
            [e.target.name]: e.target.value
        }
        setudata({
            ...udata, ...input
        })
    }
    let Sup = async (e) => {
        e.preventDefault()
        try {
            setudata({
                UserName: "",
                phoneNumber: "",
                mail: "",
                password: ""
            })
            alert('User Added')
            let req = await axios.post("http://localhost:4000/", udata)
        } catch (error) {
            console.log("error", error);
        }
    }
    let stylishobj1 = { flexDirection: 'column', display: 'flex', boxSizing: 'border-box', alignIitems: 'center', justifyContent: 'center', height: '100vh' }
    return (
        <div className={style1.parent1}>
            <form style={stylishobj1} className={`mb-3 ${style1.singinform} container`}>
                <p className={style1.p1}>Sign-up Form</p>
                <div className={` ${style1.p2}`}>
                    <div className="m-2 ">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={userdata} name="mail" udata={udata.mail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email Here' />
                    </div>
                    <div className="m-2 ">
                        <label htmlFor="exampleInputEmail2" className="form-label">UserName</label>
                        <input value={udata.UserName} name="UserName" onChange={userdata} type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder='Enter Name Here' />
                    </div>
                </div>
                <div className={` ${style1.p2}`}>
                    <div className="m-2 ">
                        <label htmlFor="exampleInputEmail3" className="form-label">Phone #</label>
                        <input onChange={userdata} value={udata.phoneNumber} name="phoneNumber" type="number" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder='Phone Number' />
                    </div>
                    <div className="m-2 ">
                        <label htmlFor="exampleInputEmail3" className="form-label">Password</label>
                        <input onChange={userdata} name="password" value={udata.password} type="password" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder='Enter Password Here' />
                    </div>
                </div>
                <div className={`mb-3 ${style1.p3}`}>
                    <button type="submit" className="m-2 btn btn-primary" onClick={Sup}>Create Acount</button>
                </div>
            </form>
            <div>

            </div>
        </div >
    )
}
