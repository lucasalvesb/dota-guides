import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import GuideList from './../../components/GuideList'

// styles
import './Search.css'

//components

import GuideData from '../guidedata/GuideData'

export default function Search() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = 'https://dota-guides.netlify.app/search?q=' + query
    const { error, isPending, data } = useFetch(url, method = 'GET')


    return (
        <div>
            <h2 className="page-title">Guides found with "{query}"</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <GuideList guides={data} />}
        </div>
    )
}