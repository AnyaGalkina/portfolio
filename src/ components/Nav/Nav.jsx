import React from 'react';
import style from "./Nav.module.scss";

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href={"#about"} className={style.link}>About</a>
            <a href={"#skills"} className={style.link}>Skills</a>
            <a href={"#projects"} className={style.link}>Projects</a>
            <a href={"#contacts"} className={style.link}>Contacts</a>
        </div>
    );
};

export default Nav;