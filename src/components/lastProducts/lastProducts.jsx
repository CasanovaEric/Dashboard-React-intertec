import "./lastProducts.scss"
import InventoryIcon from '@mui/icons-material/Inventory';

const LastProducts = () => {
    return (
        <div className="lastProducts">
        <div className="top">
            <h1 className="titulo">Productos nuevos:</h1>
            <InventoryIcon/>
        </div>
        <div className="bottom">
            <div className="listado">

            </div>
        </div>
        </div>
        
    )
} 


export default LastProducts;