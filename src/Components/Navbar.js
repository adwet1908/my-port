import React from 'react'
import '../index.css'

import { HashLink as Link} from "react-router-hash-link" 

export default function Navbar() {
    return (
        <nav className='navbar'>
            <ul style={{ listStyleType: 'none' }}>
                <li><Link to = "#home" className="nav-item"><h3>Home</h3></Link></li>
                <li><Link to = "#about" smooth className="nav-item"><h3>About me</h3></Link></li>
                <li><Link to = "#connect" smooth className="nav-item"><h3>Connect Me</h3></Link></li>
            </ul>
        </nav>
    )
}
