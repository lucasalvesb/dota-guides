import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'
import HeroList from '../../components/HeroList'
import { Link } from 'react-router-dom'



export default function Heroes() {

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
        <div className="home">
            <h1> Select your hero: </h1>
            {data && <HeroList heroes={data} />}
            
        </div>
        
    )

}
