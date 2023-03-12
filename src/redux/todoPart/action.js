import { GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType"
import axios from "axios"

const getTodoRequest = () =>{
    return {type:GET_TODO_REQUEST}
}

const getTodoSuccess = (payload)=>{
    return {type:GET_TODO_SUCCESS,payload}
}

const getTodoFailure = () =>{
    return {type:GET_TODO_FAILURE}
}


export const getTodo = (dispatch) =>{
    dispatch(getTodoRequest())
    return axios.get(`http://localhost:8080/todos`).then((res)=>dispatch(getTodoSuccess((res.data)))).catch((err)=>dispatch(getTodoFailure()))
}

export const addTodo = (title) => (dispatch) =>{
    let obj = {
        title:title,
        status:false
    }
    dispatch(getTodoRequest())
    return axios.post(`http://localhost:8080/todos`,obj).then((res)=>res).catch((err)=>dispatch(getTodoFailure()))
}

