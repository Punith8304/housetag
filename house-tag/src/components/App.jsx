import React from "react";
import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar.jsx";
import {Owners, Home, Login, Services} from "./Pages/Routes.js"
/*Routes.js acts as a entry way to the pages folder and basically everything from other files */

function App() {
    return (<div className="App">
        <NavBar />
        <Routes>
            <Route path="/owners" element={<Owners />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Login />} />
            <Route path="/services" element={<Services />} />
            
        </Routes>
    </div>)
}

export default App;