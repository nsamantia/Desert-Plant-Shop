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
                <Link to="/Cart"><li>Cart</li></Link>
            </ul>
        </div>


    )
}

export default Nav