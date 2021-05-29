import React from "react"
import Header_Img from "../images/badge_header.jpg"
import "./style/Sign_In.css"

class Sign_Up extends React.Component{
    render(){
      return(
        <React.Fragment>
         <div className="Sign__badge">
          <div className="SignForm m-5">
               <div className="header">
                   <img src={Header_Img}/>
               </div>
               <br></br>
               <form onSubmit={this.props.onSubmit}>
               <div className="form-group mb-2">
                   <label className="mb-1">
                   Username
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
                  <div className="form-group mb-2">
                     <label className="mb-1">
                        Confirm Password
                     </label>
                     <input 
                     type="password"
                     className="form-control"
                     name="password"
                   />
                  </div>
                 <div className="form-group mb-2">
                     <label className="mb-1">
                         Email
                     </label>
                     <input 
                     type="email"
                     className="form-control"
                     name="email"
                   />
                  </div>
              
                  <button type="submit" className="Sign__button">Sign in</button>
               </form>
           </div>
         </div>
        </React.Fragment>
      )
    }
  }
  
  export default Sign_Up