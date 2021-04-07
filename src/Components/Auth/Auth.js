import React, { useState } from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import './Auth.scss';
import { loginUser } from '../../ducks/authReducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Auth = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('/api/auth/login', { username, password }).then((res) => {
      props.loginUser(res.data);
      props.history.push('/Cart/Cart');
    });
  };

  const handleRegister = () => {};

  return (
    <div>
      <Nav />
      <div className="auth">
        <h1 className="shop-title">Login</h1>
        <div className="text-container">
          <p>Please login to view your cart</p>
          <p>You may also checkout as a guest</p>
        </div>
        <div className="login-container">
          <div className="auth-input-container">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              type="text"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div className="auth-button-container">
            <button onClick={() => handleLogin()}>Login</button>
            <button onClick={() => handleRegister()}>Register</button>
            <Link to="/Cart">
              <button>Continue As Guest</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { loginUser })(Auth);
