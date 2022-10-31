import style1 from './Signup.module.css'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { receivedata, senddata } from '../Apis/Api'

export default function SignUp() {
    const [userAlldata, setuserAlldata] = useState([])

    let formValues = {
        UserName: "",
        phoneNumber: "",
        mail: "",
        password: ""
    }

    const [udata, setudata] = useState(formValues)

    // let mydata = async () => {
    //     let data = await receivedata()
    //     setuserAlldata(data)
    //     console.log(userAlldata);
    // }

    let receivedata = async () => {
        let data = await axios.get('http://localhost:4000/users')
        setuserAlldata(data.data)
        console.log(data.data)
    }


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
            setudata(formValues)
            alert('User Added')
            senddata(udata)
            receivedata()
            // mydata()
        } catch (error) {
            console.log("error", error);
        }
    }
    useEffect(() => {
            // mydata()
            receivedata()
    }, [])
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
                        <label htmlFor="exampleInputEmail31" className="form-label">Password</label>
                        <input onChange={userdata} name="password" value={udata.password} type="password" className="form-control" id="exampleInputEmail31" aria-describedby="emailHelp" placeholder='Enter Password Here' />
                    </div>
                </div>
                <div className={`mb-3 ${style1.p3}`}>
                    <button type="submit" className="m-2 btn btn-primary" onClick={Sup}>Create Acount</button>
                </div>
                <div>
                    {
                        userAlldata.map((obj, i) => {
                            return (
                                <div key={i}>
                                    <p >User Name = {obj.UserName}</p>
                                    <p>user PhoneNumber = {obj.phoneNumber}</p>
                                    <p>user mail = {obj.phoneNumber}</p>
                                    <p>user Password = {obj.password}</p>
                                    <hr />
                                </div>
                            )

                        })
                    }
                </div>
            </form>
        </div >
    )
}
