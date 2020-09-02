import React, {useState} from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {

    const logo = require('../images/portfolio.png')
    const [ activeBurger, setActiveBurger ] = useState(false)

    const clickOnBurger = () => {
        setActiveBurger(!activeBurger)
    }

    const desactiveBurger = () => {
        setActiveBurger(false)
    }

    return (
        <nav className="navbar has-background-info" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <img className="navbar-item" src={logo} alt="logo" width="64" />

                <div role="button" onClick={clickOnBurger} className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="myNavbar">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div id="myNavbar" className={activeBurger ? "navbar-menu is-active" : "navbar-menu"}>
                <div className="navbar-start">
                    <Link 
                        className="navbar-item has-text-white has-background-info" 
                        onClick={desactiveBurger}
                        to="/">
                        Home
                    </Link>

                    <Link 
                        className="navbar-item has-text-white has-background-info" 
                        onClick={desactiveBurger}
                        to="/interview">
                        Interactive Interview
                    </Link>

                    <Link 
                        className="navbar-item has-text-white has-background-info" 
                        onClick={desactiveBurger}
                        to="/portfolio">
                        Portfolio
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar