import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import "./Navbar.css"


function Navbar() {
    const [click, setClick] = useState(false);
    const [dropDown, setDropDown] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropDown(false)
        } else {
            setDropDown(true)
        }
    }
    const onMouseLeave = () => setDropDown(false)
    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    LendHome
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services <i className="fas fa-caret-down" />
                        </Link>
                        {dropDown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
                            Contact Us 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </div>
    )
}
export default Navbar;