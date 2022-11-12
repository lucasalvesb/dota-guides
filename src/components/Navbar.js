import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { useRef } from 'react'


// styles
import './Navbar.css'

//components
import Searchbar from './Searchbar'


export default function Navbar() {
    const { color } = useTheme()

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("active")
    }


    return (
        <div className="navbar" style={{ background: color}}>
            <a href="#" className="toggle-button" onClick={showNavbar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <h1 className="title-name">DOTA GUIDES </h1>
            <nav ref={navRef}>
                
                <Link to="/" className="brand">
                    <h1> Homepage </h1>
                </Link>
                <Link to="/heroes" className="brand">
                    <h1> Heroes </h1>
                </Link>
                <Link to="/guidedata" className="brand">
                    <h1> Guides </h1>
                </Link>
                <Searchbar className="searchbar"/>
                <Link to="/create" className="brand"> <span> Create Guide </span></Link>
            </nav>
        </div>
    )
}