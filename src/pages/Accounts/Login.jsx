import React from "react"
import Log_In from "../../components/Log_In"
import Hero from "../../components/Hero"

class LogIn extends React.Component{

	render(){
		return(
			<React.Fragment>
				<Hero h={"15vh"}></Hero>
				<div className="container">
					<Log_In></Log_In>
				</div>
			</React.Fragment>
		)
	}
}


export default LogIn