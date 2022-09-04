import React from 'react';
import style from "./Skill.module.scss";

const Skill = (props) => {

    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <img src={props.src} alt={props.alt}/>
            </div>
            <div>
                <h3>
                    {props.title}
                </h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Skill;