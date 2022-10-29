import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'
import HeroList from '../../components/HeroList'
import { Link } from 'react-router-dom'

// styles
import './Home.css'



export default function Home() {

    return (
        <div className="home">
            <h1> Welcome to the best website ever </h1>
        </div>
    )
}