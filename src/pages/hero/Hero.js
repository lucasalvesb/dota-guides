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
        <img src={"https://api.opendota.com" + selectedHero.img}/>
        <h1> {selectedHero.localized_name} </h1>
        <p> {selectedHero.primary_attr}</p>
        <p> {selectedHero.attack_type}</p>
        <ul ><li className="hero-roles">{selectedHero.roles}</li></ul>
        </div>
        
    ) 
}

