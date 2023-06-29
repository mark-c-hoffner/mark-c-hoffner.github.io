import React from 'react';
import "./Footer.css";

import IconLink from './IconLink';
import dataArray from "../../../util/social-data.js";

/**
 * React Function Component displays footer.
 * @returns {JSX.Element} - A React Component instance.
 */
const Footer = () => {

    const getFooterIcons = () => {
        return dataArray.map((e, i) => {
            return <IconLink key={i} linkInfo={e} size="40em" />
        });
    };

    return (
        <div className="footer">
            {getFooterIcons()}
        </div>
    );
};

export default Footer;