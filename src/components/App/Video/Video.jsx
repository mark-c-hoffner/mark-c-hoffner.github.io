import React from "react";
import "./Video.css";

/**
 * React Function Component for displaying video. 
 * @param {String} src - Source of the video to display.
 * @returns {JSX.Element} - A React Component instance.
 */
const Video = ({ src }) => {
    return (
        <video autoPlay loop playsInline className="video" data-testid="video">
            <source src={src} type="video/mp4" data-testid="source" />
        </video>
    );
};

export default Video;