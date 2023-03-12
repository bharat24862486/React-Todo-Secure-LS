import { LoginError, LoginRequest, LoginSuccess } from "./actionType"
import axios from "axios"


const logRequest = () =>{
    return {type:LoginRequest}
}

const logSuccess = (payload)=>{
    return {type:LoginSuccess,payload}
}

const logError = () =>{
    return {type:LoginError}
}

export const sendLogin = (email,password) => (dispatch) =>{
    let obj = {
        email,
        password
    }

    return axios.post(`https://reqres.in/api/login`,obj).then((res)=>dispatch(logSuccess(res.data.token))).catch((err)=>console.log(err))
}


