import { useContext } from 'react'
import HeroList from '../../components/HeroList'
import {HeroContext} from '../../context/HeroContext'

import './Heroes.css'

export default function Heroes() {
    const { heroes, error, loading } = useContext(HeroContext)   
    
    if (error) return <p>{error}</p>
    if (loading) return <p>Loading...</p>

    return (
        <div className="home">
            <h1 className="text-title"> Select your hero: </h1>
            <HeroList heroes={heroes} />            
        </div>
        
    )

}
