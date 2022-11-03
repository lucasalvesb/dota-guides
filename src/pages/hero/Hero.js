import { useState, useEffect, useRef, useContext } from "react";
import { HeroContext } from "../../context/HeroContext";
import { useParams } from 'react-router-dom'

// styles

import './Hero.css'

export default function Hero() {
    const { selectedHero, setSelectedHero, heroes, loading } = useContext(HeroContext)   
    const { name } = useParams()   


    useEffect(() => {       
        if (name && heroes) {
            const hero = heroes.find(hero => name === hero.localized_name) // acha o selected hero
            setSelectedHero(hero)
        }
    }, [heroes, name]) 

    if (loading || !selectedHero) return <p>Loading...</p>


    
    return (
        
        <div className="hero-info">
        <img className="hero-img" src={"https://api.opendota.com" + selectedHero.img}/>
        <h1> {selectedHero.localized_name} </h1>
        <p className="title-hero-page">Primary attribute:</p>
        <p> {selectedHero.primary_attr.charAt(0).toUpperCase()+selectedHero.primary_attr.slice(1)}</p> 
        <p className="title-hero-page"> Attack type: </p>
        <p> {selectedHero.attack_type}</p>
        <ul className="hero-roles-ul">
            <p className="title-hero-page">Roles:</p>
            {selectedHero.roles.map(item => <li className="hero-roles">{item}</li>)}
        </ul>
        </div>
        
    ) 
}

