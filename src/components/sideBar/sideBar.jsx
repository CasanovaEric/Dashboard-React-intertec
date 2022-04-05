import "./sideBar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CategoryIcon from '@mui/icons-material/Category';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, Routes, Route, Switch } from "react-router-dom";
import Productos from "../productos/productos";
import Home from "../../pages/home/home"
import Categorias from "../categorias/categorias";

const SideBar = () => {
    return (
        <div className="sideBar"> 
        <div className="top">
            <span className="logo"> Intertec </span>
        </div>
        <hr/>
        <div className="center">
            <ul> 
                <li>
                    <Link to="/"> 
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                    </Link>
                    </li>
                <li>
                    <PersonIcon className="icon"/>
                    <Link  to="/users"> 
                    <span>Usuarios</span>
                    </Link>
                    </li>
                    
                <li>
                    <ProductionQuantityLimitsIcon className="icon"/>
                    <Link to="/products">
                    <span>Productos</span>
                    </Link>
                    </li>
                <li>
                    <CategoryIcon className="icon"/>
                    <Link to="/category">
                    <span>Categorias</span>
                    </Link>
                    </li>


                <li>
                    <LogoutIcon className="icon"/>
                    <span>Salir</span></li>
            </ul>
        </div>

    </div>

    )
}

export default SideBar