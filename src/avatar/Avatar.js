import React from 'react';
import PropTypes from "prop-types"
import avatarImage from "../assets/homepage_jerin-removebg-preview.png"
import "../styles/avatar.css"

const Avatar =({ page })=> {
    const avatarClass = `avatar ${page}`;
    const spanClass = `shadow-overlay-${page}`;

    return(
        <> {/* react fragment*/}

            <span className={spanClass}></span>
            <img src={avatarImage} className=
            {avatarClass} alt="avatar"/>
       
        </>
    );
};

Avatar.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Avatar;