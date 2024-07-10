import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Consulting, Contact, Design, Development, Home, Login, Marketing, Services } from "./components/pages/Routes.js";
function App() {
    return (<Router>
            <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/services" exact element={<Services />} />
                    <Route path="/consulting" exact element={<Consulting />} />
                    <Route path="/design" exact element={<Design />} />
                    <Route path="/development" exact element={<Development />} />
                    <Route path="/marketing" exact element={<Marketing />} />
                    <Route path="/contact-us" exact element={<Contact />} />
                    <Route path="/login" exact element={<Login />} />
                </Routes>
            </Router>
    )
}

export default App;