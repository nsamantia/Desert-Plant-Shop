import React from 'react'


const CactiList = (props) => {
    console.log(props)
    return(
        <div>
            
            <img src={props.image}/>
           <p>{props.name}</p>
           <p>{props.price}</p>
           
           
            
        </div>
    )
}

export default CactiList