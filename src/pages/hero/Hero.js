import { useNavigate } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'
import { useState, useEffect, useRef } from "react";
import  data  from '../../components/HeroList';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'



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


    useEffect(() => {
    fetch(`https://api.opendota.com/api/heroStats`)
    .then((response) => {
        if (!response.ok) {
        throw new Error(
            `This is an HTTP error: The status is ${response.status}`
        )
    }
    return response.json();
    })
    .then((actualData) => {
        setData(actualData);
        setError(null);
    })
    .catch((err) => {
        setError(err.message);
        setData(null);
    })
    .finally(() => {
        setLoading(false);
    })
    }, []);
    
    return (
        <div className="hero-info">
            {data && data.map(item => {
                return (
                    <div className="hero-card">
                        <h2>{item.localized_name} </h2>
                    </div>
                )
            })}
        </div>
    )
}

