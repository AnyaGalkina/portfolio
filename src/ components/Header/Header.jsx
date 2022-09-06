import React from 'react';
import style from "./Header.module.scss";
import Nav from "../Nav/Nav";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

const Header = ({socialMedia}) => {
    return (
        <div className={style.header}>
            <Nav />
            |
                <div className={style.iconContainer}>
                    <SocialMediaLinks socialMedia={socialMedia}/>
                </div>
        </div>
    );
};

export default Header;