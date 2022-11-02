import { projectFirestore } from '../../firebase/config'
import { useEffect, useState, useContext } from 'react'
import HeroList from '../../components/HeroList'
import { Link } from 'react-router-dom'
import {HeroContext} from '../../context/HeroContext'

export default function Heroes() {
    const { heroes, error, loading } = useContext(HeroContext)   
    
    if (error) return <p>{error}</p>
    if (loading) return <p>Loading...</p>

    return (
        <div className="home">
            <h1> Select your hero: </h1>
            <HeroList heroes={heroes} />            
        </div>
        
    )

}
