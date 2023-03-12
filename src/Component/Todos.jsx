import TodoInput from "./TodoInput";
import React, { useEffect, useReducer } from "react"

import { useDispatch, useSelector } from "react-redux";

// import { } from "../redux/todoPart/action";
import axios from "axios";
import { getTodo } from "../redux/todoPart/action";





const Todos = () => {

  const dispatch = useDispatch()
  const state = useSelector((data)=>data.todoReducer)
  console.log(state)

  

 

  useEffect(()=>{
    dispatch(getTodo)
  },[])


  

  
  

  

  


  

  return (
    <div>
      <TodoInput/>
    {/* add TodoInput component here */}
    <h1>Todos</h1>
    {state.todo.map((el)=>{
      return (
        <div key={el.id}> <span>{el.title}</span> {el.status?'Completed' : 'Pending'} </div>
      )
    })}

    {/* {console.log(state.todo)} */}
    </div>
  );
};

export default Todos;
