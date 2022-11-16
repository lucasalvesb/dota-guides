import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'

// styles
import './Guide.css'

export default function Guide() {
    
    const { id } = useParams()
    const { mode } = useTheme()

    const [guide, setGuide] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)
    const [buttonText, setButtonText] = useState('Mark as SEEN')

    useEffect(() => {
        setIsPending(true)

        const unsub = projectFirestore.collection('guides').doc(id).onSnapshot((doc) => {
            if (doc.exists) {
                setIsPending(false)
                setGuide(doc.data())
            } else {
                setError('Guide not found!')
                setIsPending(false)
                
            }
        })

        return () => unsub()

    }, [id])

    const handleClick = () => {
        projectFirestore.collection('guides').doc(id).update({
            title: guide.title.includes('SEEN') ? guide.title.replace('SEEN', '') : `SEEN ${guide.title}`
    })

        if (buttonText.includes('SEEN')){
            setButtonText('Mark as UNSEEN')
        } 
        
        if (buttonText.includes('UNSEEN')){
            setButtonText('Mark as SEEN')
        }
    }

    

    return (
        <div className={`guide ${ mode }`}>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {guide && (
                <>
                    <h2 className="page-title">{guide.title}</h2>
                    <p> Takes {guide.spike} to reach power spike.</p>
                    <ul className="list-name">
                        <strong> Recommended items:</strong> {guide.items.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className="style">How to play: {guide.style}</p>
                    <button className="button-seen" onClick={ handleClick }>{buttonText}</button>
                </>
            )}
        </div>
    )
}