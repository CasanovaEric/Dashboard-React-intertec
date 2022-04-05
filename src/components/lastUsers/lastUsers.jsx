import "./lastUsers.scss"
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useEffect, useState } from "react";


const LastUsers = () => {

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
    return (

        <div className="lastUsers">
            <div className="top">
                <h1 className="titulo">Usuarios nuevos:</h1>
                <GroupAddIcon />
                
            </div>
            <div className="bottom">
                <div className="listado">
                <ul> 
                    { !todos  ? "cargando..." :
                    todos.map( (todos , firstName,) =>{
                        return <li key={firstName}> {todos.firstName} </li>
                    })}
                </ul>

                </div>
            </div>
        </div>



    )
}


export default LastUsers;