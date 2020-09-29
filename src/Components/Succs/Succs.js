import React, {Component} from 'react'
import axios from 'axios'
import SuccsList from './SuccsList'

class Succs extends Component{
    constructor(){
        super()
        this.state = {
            succs: []
        }

    }

    componentDidMount(){
        this.getSuccs()
    }

    getSuccs = () => {
        axios.get(`/api/succs`).then((res) => {
            this.setState({
                succs: res.data
            })
        })
        .catch(err =>{console.log(err)})
    }

    render(){
        const mappedSuccs = this.state.succs.map((element) => {
            return(
                <SuccsList
                    succsListing={element}
                    key={element.id}
                    name={element.name}
                    price={element.price}
                    image={element.img}
                />
            )
        })

        return(
            <div>
                Succs.js
                {mappedSuccs}
            </div>
        )
        
    }


}

export default Succs