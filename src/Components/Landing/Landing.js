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
            
            <div className="Landing">
                <Nav />

                <div>
                    <h1>Desert Plant Shop</h1>
                    <p className='first-p'>We are committed to providing high quality drought tolerant plants.</p>
                    <p className="second-p">All of our plants are grown from seed or cuttings.</p>
                </div>
            
                <div className="button-container">
                    <Link to="/Cacti"><button>Cacti</button></Link>
                    <Link to ="/Succs"><button>Succulents</button></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, {getUser})(Landing)