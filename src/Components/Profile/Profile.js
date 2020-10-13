import React,{useState, useEffect} from 'react'
import Nav from '../Nav/Nav'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/authReducer'
import axios from 'axios'


const Profile = (props) => {
    
    const [user, setUser] = useState({
                username: props.auth.user.username,
                editMode: false
            
    })

    const [editMode, setEditMode] = useState(false)

    

    const {username} = user
  


    // useEffect(() => {getUserInfo()}, [])

    function handleChange(e){
        const {name, value} = e.target
        setUser(state=> ({...state, [name]: value}))
    }
   
        const getUserInfo = () => {
            axios.get('/api/profile/info')
            .then(res => setUser(res.data))
        }
    
        const handleSubmit = (username) => {
            axios.put('/api/profile/edit', {username})
            .then(res => setUser({
                username:username
            }))
            setEditMode(false)
        }
        console.log(user)
        
        return(
            <div>
                <Nav />
                Profile.js
                <p>{user.username}</p>


                    <div>
                        {(editMode) ? (<div>
                            <button onClick={() => setEditMode(!editMode)}>Cancel</button>
                        </div>) : (<div>
                            <button onClick={() => setEditMode(!editMode)}>Edit</button>
                        </div>)}
                    </div>

                    <div>
                        {(editMode) ? (
                        <div>
                            <lable for='username'>Username:<input name="username" 
                            onChange={handleChange}></input></lable>
                            <button onClick={() => {handleSubmit(username)}}>Save</button>
                        </div>
                        ):(
                        <div>
                            <label for="">username: <p>{username}</p></label>
                        </div>)}
                    </div>








                    
            </div>
        )
    
}

const mapStateToProps = (reduxState) => reduxState

export default connect (mapStateToProps, {logoutUser})(Profile)