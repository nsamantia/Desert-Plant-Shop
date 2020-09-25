import React, {Component} from 'react'

class Auth extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            passsword: ''
        }
    }



    

     handleInput = (e) =>{
         this.setState({
             [e.target.name]: e.target.value
         })
        
    }
    render(){
    return(
        <div className = "auth">
            <div classname ="auth-input-container">
            <lable>Username:</lable>
            <input name="username" onChange={(e) => {this.handleInput(e)}}></input>
            <label>Password:</label>
            <input name="password" onChange={(e) => {this.handleInput(e)}}></input>

            </div>

            </div>
    )
    }
}

export default Auth