import React from 'react';

/**
 * React Function Component displays home page.
 * @returns {JSX.Element} - A React Component instance.
 */
const Home = () => {
    return (
        <div className="centered" data-testid="title">
            <h1>Mark C Hoffner</h1>
            <h2>Full Stack Developer, Azure Architect</h2>
        </div>
    );
};

export default Home;