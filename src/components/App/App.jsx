import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';

import Home from "./Routes/Home";
const About = lazy(() => import('./Routes/About'));

/**
 * React Function Component displays navbar, footer, lazy loads content. 
 * @returns {JSX.Element} - A React Component instance.
 */
const App = () => {
    return (
        <div className="App">
            <Helmet>
                <meta charset="utf-8" />
                <title>Mark C Hoffner</title>
            </Helmet>
            <Router>
                <nav>
                    <NavLink end to="/" >Home</NavLink>
                    <NavLink end to="/about" >About</NavLink>
                </nav>
                <Suspense fallback={<div></div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />,
                        <Route path="/about" element={<About />} />,
                    </Routes>
                </Suspense>
            </Router>
        </div >
    );
};

export default App;