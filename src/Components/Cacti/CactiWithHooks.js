import React,{useState, useEffect} from 'react'
import './Cacti.scss'
import axios from 'axios'
import CactiList from './CactiList'
import Nav from '../Nav/Nav'


const CactiWithHooks = () => {


    const [cacti, setCacti] = useState('')

    useEffect (() =>{getCacti()},[])

    const getCacti = () => {
        axios.get(`/api/cacti`).then((res) => {
            setCacti(res.data)
        })
    }

    
        return(
        <div>
            <Nav />
            {cacti.map((element) => {
                return (
                    <CactiList 
                    cactiListing={element} 
                    key={element.id}
                    name={element.name}
                    price={element.price}
                    image={element.img}
                    />
                )
            })}
            


        </div>
        )
    
}

export default CactiWithHooks