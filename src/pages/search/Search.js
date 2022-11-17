import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import GuideList from './../../components/GuideList'
import { projectFirestore } from '../../firebase/config'

// styles
import './Search.css'

//components

import GuideData from '../guidedata/GuideData'

export default function Search() {
/*  const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = 'https://dota-guides.netlify.app/search?q=' + query
    const { error, isPending, data } = useFetch(url) */

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsPending(true)

        const unsub = projectFirestore.collection('guides').onSnapshot((snapshot) => {
            if (snapshot.empty) {
                setError('No guides to load')
                setIsPending(false)
            } else {
                let results = [] 
                snapshot.docs.forEach(doc => {
                    results.push({ id: doc.id, ...doc.data() })
                })
                setData(results)
                setIsPending(false)
            }
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })

        return () => unsub()

    }, [])





    function findGuides(id) {
        projectFirestore
            .collection('guides')
            .where('guides.title', '==', query)
            .get()
            .then(snapshot => {
                const guides = snapshot.docs.map(doc => doc.data())
                console.log(guides)
            })
    }
    
    findGuides()

    return (
        <div>
            <h2 className="page-title">Guides found with "{query}"</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <GuideList guides={data} />}
            <p>{data && data.length}</p>
        </div>
    )
}