import React from "react"
import Header_Img from "../images/badge_header.jpg"
import "./style/Log_in.css"

class Log_In extends React.Component{
  render(){
    return(
      <React.Fragment>
       <div className="log__badge">
        <div className="LogForm m-5">
             <div className="header">
                 <img src={Header_Img}/>
             </div>
             <br></br>
        	 <form onSubmit={this.props.onSubmit}>
             <div className="form-group mb-2">
             	<label className="mb-1">
                 User
               </label>
               <input 
                 type="text"
                 className="form-control"
                 name="name"
               />
               </div> 
               <div className="form-group mb-2">
               	<label className="mb-1">
                   	Password
              	 </label>
               	<input 
                   type="password"
                   className="form-control"
                   name="password"
                 />
                </div>
            
                <button type="submit" className="Login__button">Log in</button>
             </form>
         </div>
       </div>
      </React.Fragment>
    )
  }
}

export default Log_In