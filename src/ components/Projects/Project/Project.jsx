import React from 'react';
import style from "./Project.module.scss";
import styleLink from "../../../common/styles/Link.module.scss";


const Project = (props) => {

    return (
        <div className={style.projectContainer}>
            <div>
                <div className={style.imgContainer} style={{backgroundImage: `url(${props.src})`}}>
                    <a
                        href={props.projectLink}
                        className={`${styleLink.link} ${style.link}`}
                    >Go to project</a>
                </div>
            </div>
            <h3>{props.title}</h3>
            <span className={style.projectDescription}>{props.description}</span>
        </div>
    );
};

export default Project;