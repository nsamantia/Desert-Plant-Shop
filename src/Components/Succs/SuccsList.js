import React from 'react'
import {addToCart} from '../../ducks/cartReducer'
import {connect} from 'react-redux'

const SuccsList = (props) => {
    console.log(props)
    return(
        <div>
            <img src={props.image} alt="A Succulent in a pot" />
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button onClick={(e) => {props.addToCart(props.succsListing)}}>Add To Cart</button>

        </div>
    )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, {addToCart})(SuccsList)