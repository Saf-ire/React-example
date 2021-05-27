import React from "react"
import Sign_In from "../../components/Sign_In"
import Hero from "../../components/Hero"

class Signin extends React.Component{

	render(){
		return(
			<React.Fragment>
				<Hero h={"15vh"}></Hero>
				<div className="container">
					<Sign_In></Sign_In>
				</div>
			</React.Fragment>
		)
	}
}


export default Signin