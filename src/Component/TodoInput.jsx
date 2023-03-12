
import React from "react"
import {useState} from "react"
import { useDispatch } from "react-redux"
import { addTodo, getTodo } from "../redux/todoPart/action"

function TodoInput(){
    const [state,setState] = useState('')
    const dispatch = useDispatch()

    function Chnage(){
        dispatch(addTodo(state)).then((res)=>dispatch(getTodo))
        setState('')
    }

    return(
        <div>
            <input type="text" data-testid = "todo-input" value={state} onChange={(e)=>setState(e.target.value)}/>
            <button data-testid ="add-button" onClick={Chnage}>Add Todo</button>
        </div>
    )
}

export default TodoInput