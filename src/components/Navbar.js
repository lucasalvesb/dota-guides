import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'


// styles
import './Navbar.css'

//components
import Searchbar from './Searchbar'


export default function Navbar() {
    const { color } = useTheme()

    return (
        <div className="navbar" style={{ background: color}}>
            <nav>
                <Link to="/" className="brand">
                    <h1> Homepage </h1>
                </Link>
                <Link to="/heroes" className="brand">
                    <h1> Heroes </h1>
                </Link>
                <Link to="/guidedata" className="brand">
                    <h1> Guides </h1>
                </Link>
                <Searchbar />
                <Link to="/create"> Create Guide </Link>
            </nav>
        </div>
    )
}