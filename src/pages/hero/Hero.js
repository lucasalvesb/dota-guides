import { useState, useEffect, useRef, useContext } from "react";
import { HeroContext } from "../../context/HeroContext";
import { useParams } from 'react-router-dom'

// styles

import './Hero.css'

export default function Hero() {

    const { selectedHero, heroes, setSelectedHero, setHeroes } = useContext(HeroContext)

    const { name } = useParams()

    useEffect(() => {

        return () => {
            
        <div className="hero-info">
        <img src={"https://api.opendota.com" + heroes.img}/>
        <h1> {heroes.localized_name} </h1>
        <p> {heroes.primary_attr}</p>
        <p> {heroes.attack_type}</p>
        <ul className="hero-roles"><li >{heroes.roles}</li></ul>
        </div>}
    }, [{name}])

    return (
        
        <div className="hero-info">
        <img src={"https://api.opendota.com" + selectedHero.img}/>
        <h1> {selectedHero.localized_name} </h1>
        <p> {selectedHero.primary_attr}</p>
        <p> {selectedHero.attack_type}</p>
        <ul className="hero-roles"><li >{selectedHero.roles}</li></ul>
        </div>
    ) 
}

