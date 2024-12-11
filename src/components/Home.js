import React from "react"
import {useLocation,useNavigate} from 'react-router-dom';

function Home (){
    const location=useLocation()
    const navigate=useNavigate()

    const handlelogout=()=>{
        navigate("/")

    }

    return (
        <div className="homepage">

            <h1>Hello {location.state.id} and welcome to the page</h1>
            
    <button onClick={handlelogout}
    className="logoutbutton">Logout</button>

        </div>
    )
}

export default Home