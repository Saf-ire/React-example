import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import BadgeForm from "../../components/BadgeForm"
import Button from "../../components/MainButton"
import D_header from "../../images/badge_header.jpg"
import D_picture from "../../images/default_image.png"
import "../NewBadge/NewBadge.css"
import api from "../../libs/api"

class NewBadge extends React.Component{

    state = {
        loading: false,
        error: null,
        form:{
            header_picture: "",
            profile_picture: "",
            name: "",
            title: "",
            Rank: "",
            Level: "",
            Missions: "",

        }
    }

    handleChange = event =>{
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    } 

    handleSubmit = async (event) =>{
        event.preventDefault()
        this.setState({loading:true, error:null})

        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false, error:null})
            this.props.history.push("/")
        } catch(error){
            this.setState({loading:false, error: error})
        }

    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                header_picture = {this.state.form.header_picture || D_header}
                                profile_picture = {this.state.form.profile_picture || D_picture}
                                name = {this.state.form.name || "Hunter"}
                                title = {this.state.form.title || "Jagras"}
                                Rank = {this.state.form.Rank || "Low"}
                                Level = {this.state.form.Level || "1"}
                                Missions = {this.state.form.Missions || "0"}
                            ></Badge>
                        </div>
                        <div className="col">
                            <BadgeForm
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit} 
                            formValues={this.state.form}>

                            </BadgeForm>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NewBadge