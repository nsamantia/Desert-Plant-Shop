import React, {Component} from 'react'
import axios from 'axios'
import {loginUser} from '../../ducks/authReducer'
import {connect} from 'react-redux'

class Auth extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }



    

     handleInput = (e) =>{
         this.setState({
             [e.target.name]: e.target.value
         })
        
    }

    handleRegister = () =>{
        const {username, password} = this.state
        axios
            .post('/api/auth/register', {username, password})
            .then((res) => {
                this.props.loginUser(res.data)
                this.props.history.push('/Landing/Landing')
            })
    }

    handleLogin = () => {
        const {username, password} = this.state
        axios
            .post('/api/auth/login', {username, password})
            .then((res) =>{
                this.props.loginUser(res.data)
                this.props.history.push('/Landing/Landing')
            })
    }

    render(){
    return(

        <div className = "auth">
            
            <div className="auth-input-container">
            <input name="username" placeholder="Username" onChange={(e) => {this.handleInput(e)}}></input>
            <input name="password" placeholder="Password" onChange={(e) => {this.handleInput(e)}}></input>
            </div>

            <div className="auth-button-container">
                <button onClick={() => {this.handleLogin()}}>Login</button>
                <button onClick={() => {this.handleRegister()}}>Register</button>
            </div>

        </div>
    )
    }
}
 export default connect(null , {loginUser}) (Auth)