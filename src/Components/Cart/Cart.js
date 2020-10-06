import React from 'react'
import Nav from '../Nav/Nav'
import {connect} from 'react-redux'
import CartList from './CartList'

import { loadStripe } from '@stripe/stripe-js'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
const stripePromise = loadStripe('pk_test_51HXYqjDeUNmgXOYnaq5czks1BtAJRANDHTRxbBwz3MPWX3KcEDXZgkKH4qNaR2ggaYDx1B60jWIMoSpHOgqGvvq600blttLjhI')

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

    const totalPrice = () => {
        let total = 0
        for (let i = 0; i < props.cart.cart.length; i++){
            total += parseFloat(props.cart.cart[i].price)
        }
        
        return total
    }

   
    
    async function handleToken(token){
       const body = {
           token,
           totalPrice: totalPrice(props.cart.cart)
       }
        const res = await axios.post('/stripe/checkout', body)
        const { status } = res.dataç
      
    
    }


         
    
    return(
        <div>
            <Nav />
            
            {mappedCart}
            
            
            <div className='checkout'>

                    <p>Total: {totalPrice(props.cart.cart)}</p>

                <StripeCheckout
                    stripeKey='pk_test_51HXYqjDeUNmgXOYnaq5czks1BtAJRANDHTRxbBwz3MPWX3KcEDXZgkKH4qNaR2ggaYDx1B60jWIMoSpHOgqGvvq600blttLjhI'
                    token
                    amount={totalPrice(props.cart.cart) * 100}
                    billingAddress
                    shippingAddress
                    name='Thanks for shopping!'
                />
            </div>
        </div>
    )
}
const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Cart)

