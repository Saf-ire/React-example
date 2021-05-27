import React from "react"
import Hero from "../../components/Hero"
import Button from "../../components/MainButton"
import "./Main.css"

const Main = (props) => {
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__title">{props.title || "Welcome"}</h1>
                    <Button contentText={"Start"} link={"/select"}></Button>
                </div>
                <Hero h={"88vh"}></Hero>
            </div>
        </React.Fragment>
    )
}

export default Main