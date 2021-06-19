import React from "react"
import Sign from "../../components/Sign_Up"
import Hero from "../../components/Hero"

class SignUp extends React.Component{

	render(){
		return(
			<React.Fragment>
				<Hero h={"15vh"}></Hero>
				<div className="container">
					<Sign></Sign>
				</div>
			</React.Fragment>
		)
	}
}


export default SignUp