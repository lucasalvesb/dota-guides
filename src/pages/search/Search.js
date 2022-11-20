import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useEffect, useState } from 'react'
import GuideList from './../../components/GuideList'
import { projectFirestore } from '../../firebase/config'
import firebaseConfig from '../../firebase/config'

// styles
import './Search.css'

//components

import GuideData from '../guidedata/GuideData'

export default function Search() {

    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection("guides").onSnapshot(
    (snapshot) => {
        if (snapshot.empty) {
        setError("No guides to load")
        setIsPending(false);
        } else {
        let results = []
        snapshot.docs.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id });
        })
        setData(() => {
            let filteredGuides = results.filter((guide) =>
            guide.title.toLowerCase().includes(query.toLowerCase())
            )
            return filteredGuides;
        })
        setIsPending(false)
        }
    },
    (err) => {
        setError(err.message);
        setIsPending(false);
    }
    );

    return () => unsub();
}, [query]);

    
    return (
        <div>
            {<h2 className="page-title">Guides found with "{query}"</h2>}
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <GuideList guides={data} />}
        </div>
    )
}