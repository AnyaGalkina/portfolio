import React from 'react';
import style from "./Skill.module.scss";

const Skill = ({title, componentImg, description}) => {

    return (
        <div className={style.skill}>
            <div className={style.icon}>{componentImg}</div>
            <div>
                <h3>{title}</h3>
                <span className={style.description}>{description.map(d => <p>{d}</p>)}</span>
            </div>
        </div>
    );
};

export default Skill;