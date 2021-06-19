import React from "react"
import Hero from "../../components/Hero"
import Log from "../../components/Log_In"

class LogIn extends React.Component{
	render(){
		return(
			<React.Fragment>
				<Hero h={"15vh"}></Hero>
				<div className="container">
					<Log></Log>
				</div>
			</React.Fragment>
		)
	}
}


export default LogIn