import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import './HeroList.css'


export default function HeroList () {

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

const handleClick = () => {
    data && data.push
}

return (
    <div className="HeroList">
    {loading && <div> Loading... </div>}
    {error && (
        <div>{`There was a problem to fetch the data! ${error}`}</div>
    )}
    <div className="hero-list">
    {data && data.sort((a, b) => a.localized_name.localeCompare(b.localized_name)).map(item => <Link to={`/heroes/${item.localized_name}`}><img className="images-heroes" src={'https://api.opendota.com'+item.img} onClick={ handleClick() }/> </Link>)}
    </div>
    </div>
);
}
