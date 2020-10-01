import React from 'react'
import Nav from '../Nav/Nav'
import {connect} from 'react-redux'
import CartList from './CartList'

const Cart = (props) => {

    const mappedCart = props.cart.cart.map((element) => {
        return(
            
                <CartList
                cartListing = {element}
                key={element.id}
                name={element.name}
                price={element.price}
                image={element.img}
                quantity={element.quantity}
                />
                

           
        )
    })
    
    return(
        <div>
            <Nav />
            Cart.js
            {mappedCart}
            <div>
                <button>Checkout</button>
            </div>
        </div>
    )
}
const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Cart)

