import React from 'react'
import Nav from '../Nav/Nav'
import {connect} from 'react-redux'

const Cart = (props) => {

    const mappedCart = props.cart.cart.map((element) => {
        return(
            <div>
                <p>{element.name}</p>

            </div>
        )
    })
    
    return(
        <div>
            <Nav />
            Cart.js
            {mappedCart}
        </div>
    )
}
const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Cart)

