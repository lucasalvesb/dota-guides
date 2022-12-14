import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import Trashcan from '../assets/trashcan.svg'
import { projectFirestore } from '../firebase/config'


// styles
import './GuideList.css'

export default function GuideList({ guides }) {
    const { mode } = useTheme()
    const { color } = useTheme()
    
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
                    <Link className={`button-read ${mode}`} style={{ background: color}} to={`/guides/${guide.id}`}>Read this</Link>
                    <img
                        className={`delete ${mode}`}
                        src={Trashcan}
                        onClick={() => handleClick(guide.id)}
                        alt="delete"
                    />
                </div>
            ))}
        </div>
    )}

