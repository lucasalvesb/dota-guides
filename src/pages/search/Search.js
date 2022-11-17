import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import GuideList from './../../components/GuideList'

// styles
import './Search.css'

//components

import GuideData from '../guidedata/GuideData'



export default function Search() {
    async function getMultiple(db) {
    const guidesRef = db.collection('guides')
    const snapshot = await guidesRef.where(`${query}`, '==', true).get()

    if (snapshot.empty) {
        console.log('no guides found')
        return
    }
    if (snapshot.length > 0) {
    snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data())
    })
    }
}

    
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = 'https://dota-guides.netlify.app/search?q=' + query
    const { error, isPending, data } = useFetch(url)




    return (
        <div>
            
        </div>
    )
}