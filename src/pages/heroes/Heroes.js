import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'
import HeroList from '../../components/HeroList'
import { Link } from 'react-router-dom'


export default function Heroes({ heroes }) {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsPending(true)

        const unsub = projectFirestore.collection('heroes').onSnapshot((snapshot) => {
            if (snapshot.empty) {
                setError('No heroes to load')
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
            <h1> Select your hero: </h1>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <HeroList heroes={data}/>}
        </div>
    )
}
