import React from 'react';
import style from "./Main.module.scss";
import portfolioPhoto from "../../assets/images/gitPhoto.jpeg";
import styleLink from "../../common/styles/Link.module.scss";
import ReactTypingEffects from "react-typing-effect";
import Tilt from 'react-tilt';

const Main = () => {

    return (
        <div className={style.mainBlock} id={"about"}>
            <Tilt className="Tilt" options={{ max : 25 }} >
                <div className={style.photo}>
                    <img className={style.photo} src={portfolioPhoto} alt={"my portrait photography"}/>
                </div>
            </Tilt>
                <div className={style.text}>
                    <span className={style.greeting}>Hello,</span>
                    <h1>I'm Anna Galkina</h1>
                    <h5><span>Frontend </span>
                    <ReactTypingEffects typingDelay={"0"} text={"Developer"}/>
                    </h5>
                    <a className={styleLink.link} href={portfolioPhoto} download="tested_file">Download CV</a>
                    {/*<a className={styleLink.link}>Download CV</a>*/}
                </div>
        </div>
    );
};

export default Main;