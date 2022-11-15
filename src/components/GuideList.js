import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import Trashcan from '../assets/trashcan.svg'
import { projectFirestore } from '../firebase/config'
import { useEffect, useState } from 'react'

// styles
import './GuideList.css'

export default function GuideList({ guides }) {
    const { mode } = useTheme()
    
    if (guides.length === 0) {
        return <div className="error">There are none!</div>
    }


    const handleClick = (id) => {
        projectFirestore.collection('guides').doc(id).delete()
    }

    return (
        <div className="recipe-list">
            {guides.map(guide => (
                <div key={guide.id} className={`card ${mode}`}> 
                    <h3 className="title-guide">{guide.title}</h3>
                    <p>{guide.spike} to reach spike.</p>
                    <Link to={`/guides/${guide.id}`}>Read this</Link>
                    <img
                        className="delete"
                        src={Trashcan}
                        onClick={() => handleClick(guide.id)}
                    />
                </div>
            ))}
        </div>
    )}

