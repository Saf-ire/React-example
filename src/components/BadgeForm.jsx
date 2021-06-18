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
                  name="profile_picture_url"
                  onChange={this.props.onChange}
                  value={this.props.formValues.profile_picture_url}
                />
              </div>
              <div className="form-group mb-2">
                <label className="mb-1">
                   Background URL
                </label>
                  <input 
                     type="text"
                     className="form-control"
                     name="header_img_url"
                     onChange={this.props.onChange}
                     value={this.props.formValues.header_img_url}
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
                <div className="form-group mb-2">
                <label className="mb-1">
                  Rank
                </label>
                <input 
                  type="text"
                  className="form-control"
                  name="rank"
                  onChange={this.props.onChange}
                  value={this.props.formValues.rank}
                />
                </div>
                <div className="form-group mb-2">
                <label className="mb-1">
                    Level
                </label>
                <input 
                  type="text"
                  className="form-control"
                  name="level"
                  onChange={this.props.onChange}
                  value={this.props.formValues.level}
                />
                </div>
                <div className="form-group mb-2">
                <label className="mb-1">
                    Missions
                </label>
                <input 
                  type="text"
                  className="form-control"
                  name="missions"
                  onChange={this.props.onChange}
                  value={this.props.formValues.missions}
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