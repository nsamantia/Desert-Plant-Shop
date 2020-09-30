import React from 'react'

const SuccsList = (props) => {
    console.log(props)
    return(
        <div>
            <img src={props.image} alt="A Succulent in a pot" />
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button>Add To Cart</button>

        </div>
    )
}

export default SuccsList