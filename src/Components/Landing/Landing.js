import React, {Component} from 'react'
import './Landing.scss'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/authReducer'
import {Link} from 'react-router-dom'
import Nav from '../Nav/Nav'



class Landing extends Component{
    constructor(){
        super()
        this.state ={}
        
    }

    componentDidMount() {
        if(!this.props.isLoggedIn) {
            this.props.getUser().catch((err) => {
                this.props.history.push('/')
            })
        }
    }

    render(){
        return (
            
            <div>
                <Nav />

                <Link to="/Cacti"><button>Cacti</button></Link>
                <Link to ="/Succs"><button>Succulents</button></Link>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, {getUser})(Landing)