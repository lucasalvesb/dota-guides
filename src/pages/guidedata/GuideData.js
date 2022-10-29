import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'
import GuideList from '../../components/GuideList'

export default function GuideData() {

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

    return (
        <div className="home">
            <h1> Select your guide: </h1>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <GuideList guides={data}/>}
        </div>
    )
}