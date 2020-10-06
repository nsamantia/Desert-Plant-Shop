import React from 'react'
import {addToCart} from '../../ducks/cartReducer'
import {connect} from 'react-redux'

const SuccsList = (props) => {
    
    return(
        <div className="succ-list-container">
            <div className="item-list">
                <img className ="succ-image" src={props.image} alt="A Succulent in a pot" />
                <p className="name-p">{props.name}</p>
                <p className="price-p">{props.price}</p>
                <button classname="cart-button" onClick={(e) => {props.addToCart(props.succsListing)}}>Add To Cart</button>
            </div>

        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, {addToCart})(SuccsList)