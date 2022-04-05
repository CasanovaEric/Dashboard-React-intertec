import NavBar from "../../components/navBar/navBar"
import SideBar from "../../components/sideBar/sideBar"
import Widgets from "../../components/widgets/widgets"
import LastUsers from "../../components/lastUsers/lastUsers"
import LastProducts from "../../components/lastProducts/lastProducts"
import "./home.scss"


const Home = () => {
    return (
        <div className="home">

        <SideBar/>
        <div className="homeContainer"> 
        <NavBar/>
        <div className="widgets">
        <Widgets type="users"/>
        <Widgets type="products"/>
        <Widgets type="category"/>
        </div>
    
        <div className="destacados">
          <LastProducts/>
          <LastUsers/>
        </div>

        </div>

        </div>
    )
}

export default Home