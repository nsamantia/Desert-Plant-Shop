import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {

    return(
        <div className="nav-container">
            <ul>
                <Link to='/Landing'><li>Desert Plant Shop</li></Link>
               <Link to="/Cacti"><li>Cacti</li></Link> 
                <Link to="/Succs"><li>Succulents</li></Link>
                <li>Logout</li>
                <li>Cart</li>
            </ul>
        </div>


    )
}

export default Nav