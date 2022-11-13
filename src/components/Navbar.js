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
                <div className="container-left">
                <Link to="/" className="brand">
                    <h1 className="h1-navbar"> Homepage </h1>
                </Link>
                <Link to="/heroes" className="brand">
                    <h1 className="h1-navbar"> Heroes </h1>
                </Link>
                <Link to="/guidedata" className="brand">
                    <h1 className="h1-navbar"> Guides </h1>
                </Link>
                </div>
                <div className="container-right">
                <Searchbar className="searchbar"/>
                <Link to="/create" className="brand"> <span className="create-guide-btn"> Create Guide </span></Link>
                </div>
            </nav>
        </div>
    )
}