import React from "react";

/**
 * React Function Component displays logo and link.
 * @param {Object} linkInfo - Object containing link address, icon source, alt text.
 * @param {String} size - Height and width of the image.
 * @returns {JSX.Element} - A React Component instance.
 */
const IconLink = ({ linkInfo, size }) => {
    return (
        <a href={linkInfo.address} target="_blank" rel="noopener noreferrer" >
            <img src={linkInfo.logoSrc} alt={linkInfo.label} height={size} width={size} />
        </a>
    );
};

export default IconLink;