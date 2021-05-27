import React from "react"
import Hero from "../../components/Hero"
import Button from "../../components/MainButton"
import "./Selection.css"

const Select = (props) => {
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__title">{props.title || "Choose an option"}</h1>
                    <div className="row">
                        <div className="col">
                            <Button contentText={"Badge"} link={"/new"}></Button>
                        </div>
                        <div className="col">
                            <Button contentText={"Sign"} link={"/Signin"}></Button>
                        </div>
                        <div className="col">
                            <Button contentText={"Log"} link={"/Login"}></Button>
                        </div>
                    </div>
                </div>
                <Hero h={"88vh"}></Hero>
            </div>
        </React.Fragment>
    )
}

export default Select