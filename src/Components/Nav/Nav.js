import React from 'react'
import axios from 'axios'
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
                <Link to='/Landing'><li>Desert Plant Shop</li></Link>
               <Link to="/Cacti"><li>Cacti</li></Link> 
                <Link to="/Succs"><li>Succulents</li></Link>
                                {/* <li>{props.user.username}</li> */}
                <li><button onClick={() => {logout()}}>Logout</button></li>
                <Link to="/Cart"><li>Cart</li></Link>
            </ul>
        </div>


    )
}

const mapStateToProps = (reduxState) => reduxState

export default withRouter(connect(mapStateToProps, {logoutUser})(Nav))