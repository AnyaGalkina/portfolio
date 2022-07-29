import React from 'react';
import style from "./Footer.module.css";
import styleContainer from "../../common/styles/Container.module.css";

export const Footer = ({contacts}) => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Follow me on</h2>
                <div className={style.iconContainer}>
                    {contacts.map(c => {
                        return (
                            <a className={style.icon} href={c.link} key={c.id}>
                                <img src={c.imgSrc} alt={c.contactName}/>
                            </a>
                        )
                    })}
                </div>
                <p className={style.copyright}>Copyright © 2022 Anna Galkina</p>
            </div>
        </div>
    );
};

// export default Footer;