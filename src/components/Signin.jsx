import React, { Component } from 'react'
import './style/Signin.css'

class Sign_in extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="sign_in">
                    <div className="sing_in__header">

                    </div>
                    <div className="sing_in__forms">
                        <div className="Username">
                            <p>Username</p>
                            <input type="text"></input>
                        </div>
                        <div className="Password">
                            <p>Password</p>
                            <input type="text"></input>
                        </div>
                        <div className="Email">
                            <p>Email</p>
                            <input type="text"></input>
                        </div>
                        </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Sign_in;
