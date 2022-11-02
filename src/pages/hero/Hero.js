import { useState, useEffect, useRef, useContext } from "react";
import { HeroContext } from "../../context/HeroContext";
import { useParams } from 'react-router-dom'

// styles

import './Hero.css'

export default function Hero() {

    const [name, setName] = useState('')
    const [attack, setAttack] = useState('')
    const [attribute, setAttribute] = useState('')
    const [roles, setRoles] = useState('')

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);   
    const { localized_name } = useParams()

    const { selectedHero, heroes } = useContext(HeroContext)


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

