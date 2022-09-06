import React from 'react';
import style from "./SocialMediaLink.module.scss";

const SocialMediaLink = ({link, imgComponent}) => {
    return <a className={style.icon} href={link}>{imgComponent}</a>;
};

export default SocialMediaLink;