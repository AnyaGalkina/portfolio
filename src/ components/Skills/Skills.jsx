import React from 'react';
import style from "./Skills.module.css";
import styleContainer from "../../common/styles/Container.module.css";
import Skill from "./Skill/Skill";
import Title from "../Title/Title";


const Skills = ({skills}) => {
    return (
        <div className={style.skillsBlock} id={"skills"}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Technical skills"}/>
                <div className={style.skills}>
                    {skills.map(s =>
                        <Skill
                            key={s.skillId} title={s.skillName}
                            description={s.skillDescription}
                            src={s.imgSrc} alt={s.alt}
                        />)}
                </div>
            </div>
        </div>
    );
};

export default Skills;