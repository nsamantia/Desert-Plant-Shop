import React, {Component} from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'



class Landing extends Component{
    constructor(){
        super()
        
    }


    render(){
        return (
            <div>
              <Link to="/Cacti"><input type='image' src="https://images.unsplash.com/photo-1503873369431-72843525edbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=794&q=80" alt="Cacti" className="cacti-listing-input"></input></Link>
                <p>Cacti</p> 
                <Link to ="/Succs"><input type='image' src="https://images.unsplash.com/photo-1516223018202-9a22ff8d55f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" alt="Succulents" className="succs-listing-input"></input></Link>
                <p>Succulents</p>
            </div>
        )
    }
}

export default Landing