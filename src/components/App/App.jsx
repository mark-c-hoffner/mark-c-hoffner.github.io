import React from "react"
import { Helmet } from "react-helmet"
import './App.css'

/**
 * React Function Component 
 * @returns {JSX.Element} - A React Component instance.
 */
const App = () => {
    return (
        <div className="App">
            <Helmet>
                <meta charset="utf-8" />
                <title>Mark C Hoffner</title>
            </Helmet>
            <div className="centered" data-testid="title">
                <h1>Mark C Hoffner</h1>
                <h2>Full Stack Developer, Azure Architect</h2>
            </div>
        </div >
    )
}

export default App