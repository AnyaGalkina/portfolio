import React from 'react';
import style from "./Main.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import portfolioPhoto from "../../assets/images/gitPhoto.jpeg";
import styleLink from "../../common/styles/Link.module.scss";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";


const Main = ({contacts}) => {
    return (
        <div className={style.mainBlock} id={"about"}>
            <div className={styleContainer.container}>
                    <div className={style.photo}>
                        <img className={style.photo} src={portfolioPhoto} alt={"my portrait photography"}/>
                    </div>
                    <div className={style.text}>
                        <span className={style.greeting}>Hello,</span>
                        <h1>I'm Anna Galkina</h1>
                        <h5>Frontend Developer</h5>
                        <span>some other text Placeholder////</span>
                        <a className={styleLink.link}>Download CV</a>
                    </div>
                <div className={style.iconContainer}>
                    <SocialMediaLinks contacts={contacts}/>
                </div>
            </div>
        </div>
    );
};

export default Main;