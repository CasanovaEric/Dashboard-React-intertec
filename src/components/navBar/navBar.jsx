import "./navBar.scss"
import SearchIcon from '@mui/icons-material/Search';
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';

const NavBar = () => {
    return (
        <div className="navBar"> 
            <div className="wrapper">   
            <div className="search">
                <input type="text" placeholder="Buscar..."/>
                <SearchIcon/>
            </div>
            <div className="items">
                <div className="item">
                    <AdbOutlinedIcon/>
                <img src="../diseño_1.jpg" alt="" className="avatar"/>
                </div>
            </div>
            </div>
        </div>

    )
}

export default NavBar