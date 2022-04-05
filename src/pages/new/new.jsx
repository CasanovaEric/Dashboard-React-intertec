import React from "react"
import Categorias from "../../components/categorias/categorias"
import "./new.scss"
import SideBar from "../../components/sideBar/sideBar"
import NavBar from "../../components/navBar/navBar"


const New = () => {
    return (
        <div className="list">
        <SideBar/>
    
    <div className="listContainer">
        <NavBar/>
        <Categorias/>
        
    </div>

   

    </div>
    )
}

export default New