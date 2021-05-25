import React from "react"
import Hero from "../../components/Hero"
import "../NewBadge/NewBadge.css"

class NewBadge extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
            </React.Fragment>
        )
    }
}

export default NewBadge