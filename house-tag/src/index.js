import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode >
        {/*BrowswerRouter basically keeps tracks of the different routes
        that we have and the different links that we have in our website */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>

);

