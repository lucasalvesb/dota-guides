import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'

// styles

import './Create.css'

export default function Create() {
    const [title, setTitle] = useState('')
    const [style, setStyle] = useState('')
    const [spike, setSpike] = useState('')
    const [newItem, setNewItem] = useState('')
    const [items, setItem] = useState([])
    const itemInput = useRef(null)
    const navigate = useNavigate()

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const doc = { title, items, style, spike: spike + ' minutes' }
        console.log(doc)
        try {
            await projectFirestore.collection('guides').add(doc)
            navigate('/')
        } catch(err) {
            console.log(err)
        }
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const item = newItem.trim()

        if (item && !items.includes(item)) {
            setItem(prevItems => [...prevItems, item])
        }
        setNewItem('')
        itemInput.current.focus()
    }


    return (
        <div className="create">
            <h2 className="page-title">Add a new guide</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Hero:</span>
                    <input 
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                    />
                </label>

                <label>
                    <span>Items:</span>
                    <div className="ingredients">
                        <input 
                        type="text" 
                        onChange={(e) => setNewItem(e.target.value)}
                        value={newItem}
                        ref={itemInput}
                        />
                        <button onClick={handleAdd} className="btn">Add</button>
                    </div>
                </label>
                <p>Current items: {items.map(i => <em key={i}>{i}, </em>)}</p>

                <label>
                    <span>Style: </span>
                    <textarea 
                    onChange={(e) => setStyle(e.target.value)}
                    value={style}
                    required
                    />
                </label>

                <label>
                    <span>Power spike:</span>
                    <input 
                    type="number"
                    onChange={(e) => setSpike(e.target.value)}
                    value={spike}
                    required
                    />
                </label>

                
                    <button className="btn">Submit</button>

            </form>
        </div>
    )
}