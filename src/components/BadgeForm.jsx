import React from "react"
import "./style/BadgeForm.css"

class BadgeForm extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="BadgeForm m-5">
        	<form onSubmit={this.props.onSubmit}>
            <div className="form-group mb-2">
            	<label className="mb-1">
                Name
              </label>
              <input 
                type="text"
                className="form-control"
                name="name"
                onChange={this.props.onChange}
                value={this.props.formValues.name}
              />
              </div> 
              <div className="form-group mb-2">
              	<label className="mb-1">
                  	Profile Picture URL
              	</label>
              	<input 
                  type="text"
                  className="form-control"
                  name="profile_picture"
                  onChange={this.props.onChange}
                  value={this.props.formValues.profile_picture}
                />
                    </div>
                    <div className="form-group mb-2">
                      <label className="mb-1">
                        Badge Hero URL
                      </label>
                      	<input 
                          type="text"
                          className="form-control"
                          name="header_picture"
                          onChange={this.props.onChange}
                          value={this.props.formValues.header_picture}
                        />
                    </div>
                    <div className="form-group mb-2">
                      <label className="mb-1">
                        Title
                      </label>
                      <input 
                        type="text"
                        className="form-control"
                        name="title"
                        onChange={this.props.onChange}
                        value={this.props.formValues.title}
                      />
                    </div>
                    <button type="submit" className="Submit__button">Save</button>
                </form>
            </div>
    	</React.Fragment>
    )
  }
}

export default BadgeForm