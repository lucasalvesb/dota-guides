import { useEffect, useContext } from "react";
import { HeroContext } from "../../context/HeroContext";
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

// styles

import './Hero.css'

export default function Hero() {
    const { selectedHero, setSelectedHero, heroes, loading } = useContext(HeroContext)   
    const { name } = useParams()   
    const { mode } = useTheme()


    useEffect(() => {       
        if (name && heroes) {
            const hero = heroes.find(hero => name === hero.localized_name) // acha o selected hero
            setSelectedHero(hero)
        }
    }, [heroes, name]) 

    if (loading || !selectedHero) return <p>Loading...</p>


    
    return (
        
        <div className="container-hero">
            <div className={`hero-info ${mode}`}>
                <img className="hero-img" 
                    src={"https://api.opendota.com" + selectedHero.img}
                    alt="selected hero"/>
                <h1 className="hero-title-card"> {selectedHero.localized_name} </h1>
                <p className="title-hero-page">Primary attribute:</p>
                <p> {selectedHero.primary_attr.charAt(0).toUpperCase()+selectedHero.primary_attr.slice(1)}</p> 
                <p className="title-hero-page"> Attack type: </p>
                <p> {selectedHero.attack_type}</p>
                <ul className="hero-roles-ul">
                    <p className="title-hero-page">Roles:</p>
                    {selectedHero.roles.map(item => <li className="hero-roles">{item}</li>)}
                </ul>
            </div>
            <span className="empty-space"><br></br></span>
        </div>
        
    ) 
}
