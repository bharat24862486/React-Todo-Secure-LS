import { Route,Routes } from "react-router-dom";
import Login from "../Component/Login";
import Todos from "../Component/Todos";
import Private from "./Private";


function AllRoute(){
    return(
        <Routes>
            <Route path="/" element={<Private><Todos /></Private>} />
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}

export default AllRoute