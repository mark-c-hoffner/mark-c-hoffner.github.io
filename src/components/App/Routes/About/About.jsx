import React from 'react';
import "./About.css";

import aboutData from '../../../../util/about-data';

/**
 * React Function Component displays 'About" page.
 * @returns {JSX.Element} - A React Component instance.
 */
const About = () => {

    const getAboutDataText = (text) => {
        return text.map((e, i) => {
            return <p key={i}>{e}</p>
        })
    };

    const getAboutDataDisplay = () => {
        return (
            <div className='aboutWrapper'>
                <img src={aboutData.image.src} alt={aboutData.image.label} className='headshotImage' />
                <div className={"aboutSpacer"} />
                <div className='aboutText'>
                    {getAboutDataText(aboutData.text)}
                </div>
            </div>
        );
    };

    return (
        <div className="centered" data-testid="title">
            {getAboutDataDisplay()}
        </div>
    );
};

export default About;