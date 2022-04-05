import React from "react"
import Productos from "../../components/productos/productos"
import "./login.scss"
import SideBar from "../../components/sideBar/sideBar"
import NavBar from "../../components/navBar/navBar"


const Login = () => {
    return (
        <div className="list">
        <SideBar/>
    
    <div className="listContainer">
        <NavBar/>
        <Productos/>
        
    </div>

   

    </div>

    )
}

export default Login