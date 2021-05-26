import React from "react"
import BadgeForm from "../../components/BadgeForm"

class Log_In extends React.Component{
	render(){
		return(
			<BadgeForm
      	onChange={this.handleChange}
      	onSubmit={this.handleSubmit} 
      	formValues={this.state.form}>
      </BadgeForm>
		)
	}
}


export default Log_In