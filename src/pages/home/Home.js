import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'
import HeroList from '../../components/HeroList'
import { Link } from 'react-router-dom'
import Welcome from '../../components/Welcome'
import { useTheme } from '../../hooks/useTheme'

// styles
import './Home.css'

    


export default function Home() {

    

    return (
        <div className='home'>
            <Welcome />
        </div>
    )
}