import React from 'react';
import style from "./Nav.module.scss";
import {Link} from "react-scroll";

const Nav = () => {
    return (
        <div className={style.nav}>
            <Link to={"about"} className={style.link} activeClass={style.active} spy={true}
                  smooth={true} offset={0} duration={500}
            >About
            </Link>
            <Link to={"skills"} className={style.link} activeClass={style.active} spy={true}
                  smooth={true} offset={0} duration={500}
            >Skills</Link>
            <Link to={"projects"} className={style.link} activeClass={style.active} spy={true}
                  smooth={true} offset={0} duration={500}
            >Projects</Link>
            <Link to={"contacts"} className={style.link} activeClass={style.active} spy={true}
                  smooth={true} offset={0} duration={500}
            >Contacts</Link>
        </div>
    );
};

export default Nav;