import React from "react"
import NavBar from "../../components/navBar/navBar"
import SideBar from "../../components/sideBar/sideBar"
import Usuarios from "../../components/usuarios/usuarios"
import "./list.scss"
import Productos from "../../components/productos/productos"

const List = () => {
    return (
        <div className="list">
            <SideBar/>
        
        <div className="listContainer">
            <NavBar/>
            <Usuarios/>
            
        </div>

       

        </div>

         

    )
}

export default List