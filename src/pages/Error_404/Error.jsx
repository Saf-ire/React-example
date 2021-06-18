import React from "react"
import Hero from "../../components/Hero"
import Jeje from "../../images/Jeje.png"
import "./Error.css"

const error = (props) => {
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__title">{props.title || "Not Found"}</h1>
                    <img src={Jeje} alt="Ups"/>
                </div>
                <Hero h={"88vh"}></Hero>
            </div>
        </React.Fragment>
    )
}

export default error