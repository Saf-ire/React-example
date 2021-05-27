import React from "react"
import Blue_Star from "../images/Logo.png"
import {Link} from "react-router-dom"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <Link to="/">
                        <img src={Blue_Star} alt="Logo" />
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

export default Header