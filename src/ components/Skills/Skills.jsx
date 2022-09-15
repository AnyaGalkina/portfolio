import React from 'react';
import style from "./Skills.module.scss";
import Skill from "./Skill/Skill";
import Title from "../Title/Title";


const Skills = ({skills}) => {
    return (
        <div className={style.skillsBlock} id={"skills"}>
            <div className={style.skillsContainer}>
                <Title title={"Technical skills"}/>
                <div className={style.skills}>
                    {skills.map(s =>
                        <Skill
                            key={s.skillId} title={s.skillName}
                            description={s.skillDescription}
                            src={s.imgSrc} alt={s.alt}
                            componentImg={s.componentImg}
                        />)}
                </div>
            </div>
        </div>
    );
};

export default Skills;