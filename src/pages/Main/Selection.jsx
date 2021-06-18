import React from "react"
import Hero from "../../components/Hero"
import Button from "../../components/MainButton"
import Footer from "../../components/Footer"
import "./Selection.css"

const Select = (props) => {
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__title">{props.title || "Choose an option"}</h1>
                    <div className="row">
                        <div className="col">
                            <Button theme="Button" contentText={"Badge"} link={"/new"}></Button>
                        </div>
                        <div className="col">
                            <Button theme="Button" contentText={"Sign"} link={"/sign_in"}></Button>
                        </div>
                        <div className="col">
                            <Button theme="Button" contentText={"Log"} link={"/log_in"}></Button>
                        </div>
                    </div>
                </div>
                <Hero h={"88vh"}></Hero>
            </div>
            <Footer s={{bottom:0}}></Footer>
        </React.Fragment>
    )
}

export default Select