import React from 'react';
import style from "./Nav.module.scss";
import {Link} from "react-scroll";

const navNames = [
    {title: "About", path: "about"},
    {title: "Skills", path: "skills"},
    {title: "Projects", path: "projects"},
    {title: "Contacts", path: "contacts"},
];

const Nav = () => {
    return (
        <div className={style.navContainer}>
            {navNames.map(({title, path}, index) => {
                return <Link key={index} to={path} className={style.link} activeClass={style.active} spy={true}
                             smooth={true} offset={0} duration={500}
                >{title}
                </Link>
            })}
        </div>
    );
};

export default Nav;