import React from 'react'

import './CartList.scss'
import {connect} from 'react-redux'
import {deleteFromCart} from '../../ducks/cartReducer'

const CartList = (props) => {
    
    
    return(

        
           
        <div className="cart-list-container">
            <img className="cart-list-img" src={props.image} alt="Plant in a pot" />
            <p>{props.name}</p>
            <p>{props.quantity}</p>
            <p>{props.price}</p>
            <button onClick={(e)=>{props.deleteFromCart(props.cartListing)}}>X</button>
            
        </div>
        
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, {deleteFromCart})(CartList)