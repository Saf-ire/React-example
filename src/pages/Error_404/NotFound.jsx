import React from "react"
import ERROR from "../../images/Jeje.png"

const NotFound = () =>{
    return(
        <React.Fragment>
            <div className="container NotFound">
                <img src={ERROR} alt="Not Found"/>
            </div>
        </React.Fragment>
    )
}

export default NotFound