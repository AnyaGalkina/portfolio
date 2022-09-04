import React from 'react';
import Project from "./Project/Project";
import styleContainer from "../../common/styles/Container.module.scss";
import style from "./Projects.module.scss";
import Title from "../Title/Title";


const Projects = ({projects}) => {
    return (
        <div className={style.projectBlock} id={"projects"}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <Title title={"My projects"}/>
                <div className={style.projects}>
                    {projects.map(p => {
                        return (
                                <Project
                                    key={p.projectId}
                                    title={p.projectName}
                                    description={p.projectDescription}
                                    src={p.imgSrc}
                                    projectLink={p.projectLink}
                                />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;