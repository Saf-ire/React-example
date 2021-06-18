import React from "react"
import Button from "./MainButton"
import "./style/Log_in.css"

class Log_In extends React.Component{
  render(){
    return(
      <React.Fragment>
       <div className="log__badge">
        <div className="LogForm m-5">
             <div className="header">
                 <img src="https://64.media.tumblr.com/43073adb1ce9c1737f3e196a728cba13/tumblr_p6dkrou0Nf1vvri36o1_1280.jpg" alt="Header_Img"/>
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
                <Button theme="Button-accounts" contentText={"Login"} link={"/badges"}></Button>
                <div className="sign_up">
                 <h6>Don't you have an account?</h6>
                 <h7>Click <a href={"/sign_up"}>here</a></h7>
                </div>
             </form>
         </div>
       </div>
      </React.Fragment>
    )
  }
}

export default Log_In