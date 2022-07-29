import React from 'react';
import Project from "./Project/Project";
import styleContainer from "../../common/styles/Container.module.css";
import style from "./Projects.module.css";


const Projects = ({projects}) => {
    return (
        <div className={style.projectBlock} id={"projects"}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>My projects</h2>
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