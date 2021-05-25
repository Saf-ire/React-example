import React from "react"
import "./style/Header.css"
import Blue_Star from "../images/Logo.png"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <img src={Blue_Star} alt="Logo" />
                </div>
            </React.Fragment>
        )
    }
}

export default Header