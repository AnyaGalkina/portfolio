import React from 'react';
import style from "./Footer.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import Title from "../Title/Title";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

export const Footer = ({socialMedia}) => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={"Follow me on"}/>
                <div className={style.iconContainer}>
                    <div className={style.iconContainer}>
                        <SocialMediaLinks socialMedia={socialMedia}/>
                    </div>
                    <p className={style.copyright}>Copyright © 2022 Anna Galkina</p>
                </div>
            </div>
        </div>
    );
};

// export default Footer;