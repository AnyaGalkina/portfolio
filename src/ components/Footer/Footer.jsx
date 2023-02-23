import React from 'react';
import style from "./Footer.module.scss";
import Title from "../Title/Title";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

const date = new Date();
let year = date.getFullYear();

export const Footer = ({socialMedia}) => {

    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <Title title={"Follow me on"}/>
                <div className={style.iconContainer}>
                    <div className={style.iconContainer}>
                        <SocialMediaLinks socialMedia={socialMedia}/>
                    </div>
                    <p className={style.copyright}>Copyright © {year} Anna Galkina</p>
                </div>
            </div>
        </div>
    );
};

// export default Footer;