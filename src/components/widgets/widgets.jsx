import React from "react";
import "./widgets.scss"
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import { Link, Routes, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";





const Widgets = ( {type} ) => {

    const allUsers = "http://localhost:3000/api/user"
    const [todos,setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch (allUsers)
        console.log(response.status)
        const responseJSON = await response.json()
        setTodos(responseJSON.data) 
        console.log(responseJSON)
    }
    useEffect(() => { 
        fetchApi()
    }, [])

    let data;
    switch(type) {
        case "users": 
        data= { 
            title:"Usuarios",
            cantidad: "7",
            category: <Link to="/users"> "Ver todos los usuarios" </Link>,
            icons: <GroupIcon className="icons" style={{color:"orange" }}/> ,
        };

        break;
        case "products": 
        data= { 
            title:"Productos",
            cantidad:"30",
            category:<Link to="/products"> "Ver todos los productos" </Link>,
            icons: <ProductionQuantityLimitsOutlinedIcon className="icons" style={{color:"blue"}}/> ,
        };
        break;
        
        default:

        break;
        case "category": 
        data= { 
            title:"Categoria",
            cantidad:"celulares",
            category: <Link to="/category"> Ver todas las categorias" </Link>,
            icons: <CategoryIcon className="icons" style={{color:"red"}}/> , 
        };
    }



    return (
        <div className="widgets">
            <div className="left">
                <span className="title"> {data.title} </span>
                <span className="cantidad"> {data.cantidad} </span>
                <span className="category"> {data.category} </span>
                
            </div>
            <div className="right">
                <span className="icons">{data.icons} </span>
                
            </div>
        </div>
    )
}

export default Widgets