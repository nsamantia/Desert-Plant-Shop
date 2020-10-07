import React, {Component} from 'react'
import axios from 'axios'
import Nav from '../Nav/Nav'
import './Auth.scss'
import {loginUser} from '../../ducks/authReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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
                this.props.history.push('/Cart/Cart')
            })
    }

    handleLogin = () => {
        const {username, password} = this.state
        axios
            .post('/api/auth/login', {username, password})
            .then((res) =>{
                this.props.loginUser(res.data)
                this.props.history.push('/Cart/Cart')
            })
    }

    render(){
    return(
        <div>
            <Nav />
        <div className = "auth">
            
            <h1 className="shop-title">Please Login</h1>
            <div className = "login-container">
                <div className="auth-input-container">
                    <input name="username" placeholder="Username" onChange={(e) => {this.handleInput(e)}}></input>
                    <input name="password" placeholder="Password" onChange={(e) => {this.handleInput(e)}}></input>
                </div>

                <div className="auth-button-container">
                    <button onClick={() => {this.handleLogin()}}>Login</button>
                    <button onClick={() => {this.handleRegister()}}>Register</button>
                    <Link to="/Cart">
                        <button>Continue As Guest</button>
                    </Link>
                </div>
            </div>

        </div>
        </div>
    )
    }
}
 export default connect(null , {loginUser}) (Auth)