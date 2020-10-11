import React,{Component} from 'react'
import Nav from '../Nav/Nav'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/authReducer'
import axios from 'axios'


class Profile extends Component {
    constructor(props){
        super(props)
            this.state ={
                name: props.auth.user.username,
                editMode: false
            }
        
    }

    editPrfile = () =>{
        this.setState({
            editMode: !this.state.editMode
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render(){
        return(
            <div>
                <Nav />
                Profile.js
                {this.state.name}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => reduxState

export default connect (mapStateToProps, {logoutUser})(Profile)