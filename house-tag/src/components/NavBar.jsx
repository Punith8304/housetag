import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
function NavBar() {
    const [menuOpen, setmenuOpen] = useState(false)
    return (
        <nav>
            <Link to="/" className="title">Home</Link>
            <div className="menu" onClick={() => {
                setmenuOpen(!menuOpen);
                console.log("hello")
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
            <li><NavLink to="/owners">For Owners</NavLink></li>
            <li><NavLink className="services" to="/services">Services</NavLink></li>
            <li><NavLink to="/login">Login/SignUp</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;