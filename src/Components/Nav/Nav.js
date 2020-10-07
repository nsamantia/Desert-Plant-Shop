import React from 'react'
import axios from 'axios'
import './Nav.scss'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/authReducer'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'

const Nav = (props) => {

    const logout = () => {
        axios.delete('/api/auth/logout').then(() => {
            props.logoutUser()
            props.history.push('/')
        })
    }

    return(
        <div className="nav-container">
            <ul>
                <Link to='/'><li className="title-nav">Desert Plant Shop</li></Link>
                <Link to="/Cacti"><li className="nav-links">Cacti</li></Link> 
                <Link to="/Succs"><li className="nav-links">Succulents</li></Link>
                                {/* <li>{props.user.username}</li> */}
                <li><button className="logout-button" onClick={() => {logout()}}>Logout</button></li>
                <Link to="/Auth"><li className="nav-links">Cart</li></Link>
            </ul>
        </div>


    )
}

const mapStateToProps = (reduxState) => reduxState

export default withRouter(connect(mapStateToProps, {logoutUser})(Nav))