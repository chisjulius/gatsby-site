import React from 'react'
import {Link} from 'gatsby'

function Navbar() {
    return (
       <div>
           <nav className="nav-wrapper grey darken-4">
                <div className="container">
                    <Link className="brand-logo" to="/">chisjulius</Link>
                    <a id="#" className="sidenav-trigger" data-target="mobile-links">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/project">Projects</Link></li>
                        <li><Link to="/blog">blog</Link></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/blog">blog</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
