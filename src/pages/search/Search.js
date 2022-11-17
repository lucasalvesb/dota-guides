import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import GuideList from './../../components/GuideList'
import { projectFirestore } from '../../firebase/config'

// styles
import './Search.css'

//components

import GuideData from '../guidedata/GuideData'

export default function Search() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = 'https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel?database=projects%2Fcooking-ninja-site-42f4a%2Fdatabases%2F(default)&VER=8&RID=21958&CVER=22&X-HTTP-Session-Id=gsessionid&%24httpHeaders=X-Goog-Api-Client%3Agl-js%2F%20fire%2F8.5.0%0D%0AContent-Type%3Atext%2Fplain%0D%0AX-Firebase-GMPID%3A1%3A1081517467572%3Aweb%3Ab54c3037a97d1ef20434e1%0D%0A&zx=qihmsbz3hgf&t=1' + query
    const { error, isPending, data } = useFetch(url)

/*     const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsPending(true)

        const unsub = projectFirestore.collection('guides').onSnapshot((snapshot) => {
            if (snapshot.empty) {
                setError('No guides found')
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



    findGuides()

    function findGuides(id) {
        projectFirestore
            .collection('guides')
            .where('guides.title', '==', query)
            .get()
            .then(snapshot => {
                const guides = snapshot.docs.map(doc => doc.data())
                console.log(guides)
            })
    } */

    return (
        <div>
            <h2 className="page-title">Guides found with "{query}"</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <GuideList guides={data} />}
        </div>
    )
}