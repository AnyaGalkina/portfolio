import React from 'react';
import style from "./Skills.module.css";
import styleContainer from "../../common/styles/Container.module.css";
import Skill from "./Skill/Skill";

const state = [
    {id: "1", skill: "TypeSript", src: "", alt: "TS icon",  description:" Lorem Ipsum generators on the Internet tend to repeat first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ips"},
    {id: "1", skill: "React", src: "", alt: "React icon",  description:"some text"},
    {id: "1", skill: "Redux", src: "", alt: "Redux icon",  description:"some text"},
    {id: "1", skill: "JavaSript", src: "", alt: "JS icon",  description:"some text"},
    {id: "1", skill: "CSS", src: "", alt: "CSS icon",  description:"some text"},
    {id: "1", skill: "HTML", src: "", alt: "HTML icon", description:"some text"},
    {id: "1", skill: "Storybook", src: "", alt: "Storybook icon",  description:"some text"},
    {id: "1", skill: "Git", src: "", alt: "Git icon", description:"some text"},
]

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    {state.map(s => <Skill
                        key={s.id} title={s.skill} description={s.description}
                        src={s.src} alt={s.alt}
                    />)}
                </div>
            </div>
        </div>
    );
};

export default Skills;