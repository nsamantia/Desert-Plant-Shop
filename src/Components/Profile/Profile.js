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

    // editName = () =>{
    //     this.setState({
    //         editMode: !this.state.editMode
    //     })
    // }

    const {username} = user
    // handleChange(e){
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    useEffect(() => {getUserInfo()}, [])

    function handleChange(e){
        const {name, value} = e.target
        setUser(state=> ({...state, [name]: value}))
    }
    // editProfile = (username) => {
    //     axios.put(`/api/profile/edit`, {username}).then((res) => {
    //         this.setState({
    //             username: res.data
    //         })
    //         console.log(res)
    //         console.log(res.data)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }
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
                            <lable for='username'>Username:<input name="username" value={"username"}
                            onChange={handleChange}></input></lable>
                            <button onClick={() => {handleSubmit(username)}}>Save</button>
                        </div>
                        ):(
                        <div>
                            <label for="">username: <p>{username}</p></label>
                        </div>)}
                    </div>








                {/* {this.state.name} */}

                {/* {this.state.editMode? (
                    <div>
                        <input name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}></input>
                        <button onClick={() => this.editProfile(this.state.name)}>Save</button>
                    </div>
                ):(
                    <div>
                        <h3>{this.state.name}</h3>
                        <button onClick={this.editName}>Edit</button>
                    </div>
                )} */}
                    
            </div>
        )
    
}

const mapStateToProps = (reduxState) => reduxState

export default connect (mapStateToProps, {logoutUser})(Profile)