import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
function Private({children}) {

    const state = useSelector((data)=>data.loginReducer)
    let arr = JSON.parse(localStorage.getItem('loginState'))

    

    if(!arr.state){
        return <Navigate to="/login"/>
    }

    return children



}

export default Private