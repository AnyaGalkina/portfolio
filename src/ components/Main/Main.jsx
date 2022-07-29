import React from 'react';
import style from "./Main.module.css";
import styleContainer from "../../common/styles/Container.module.css";
import portfolioPhoto from "../../images/gitPhoto.jpeg";


const Main = () => {
    return (
        <div className={style.mainBlock} id={"about"}>
            <div className={styleContainer.container}>
                <div className={style.photo}>
                    <img className={style.photo} src={portfolioPhoto} alt={"my portrait photography"}/>
                </div>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I'm Anna Galkina</h1>
                    <p>Frontend Developer</p>
                    <a className={style.link}>Download CV</a>
                </div>
            </div>
        </div>
    );
};

export default Main;