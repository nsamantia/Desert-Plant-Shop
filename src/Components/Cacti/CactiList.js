import React from 'react'
import './Cacti.scss'
import {addToCart} from '../../ducks/cartReducer'
import {connect} from 'react-redux'


const CactiList = (props) => {
    
    return(
        <div className = "cacti-list-container">
            
            <div className = "item-list">
                <div className="img-container">
                <img className="cacti-img" src={props.image} alt="A cactus in a pot"/>
                </div>
                <p className="name-p">{props.name}</p>
                <p className="price-p">{props.price}</p>
                <button className="cart-button" onClick={(e) => {props.addToCart(props.cactiListing)}}>Add To Cart</button>
           </div>
        </div>
    )
}
const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, {addToCart})(CactiList)