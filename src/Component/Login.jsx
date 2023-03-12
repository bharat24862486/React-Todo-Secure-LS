import {useState} from "react"
import { useDispatch, useSelector } from "react-redux"

import { Navigate } from "react-router-dom";
import { sendLogin } from "../redux/loginPart/action";
function Login(){

    // let arr = JSON.parse( localStorage.getItem('loginState') ) || []

    const [email,setEmial] = useState('')
    const [pass,setPass] = useState('')
    const dispatch  = useDispatch()

    const store = useSelector((data)=>data.loginReducer)
    console.log(store.LoginStatus)

    let obj = {
        state : store.LoginStatus
    }

    localStorage.setItem('loginState',JSON.stringify(obj))

    

    function SUBMIT(){
        dispatch(sendLogin(email,pass))
        // console.log(store.LoginStatus)
        
    }
    if(store.LoginStatus){
        // console.log('hello')
        return <Navigate to="/"/>
    }

    return <div>
        <input type="text" value={email} onChange={(e)=>setEmial(e.target.value)} />
        <br />
        <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <br />
        <button onClick={SUBMIT}>Login</button>
    </div>

}


export default Login