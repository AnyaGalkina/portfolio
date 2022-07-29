import React from 'react';
import style from "./Project.module.css";




const Project = (props) => {

    return (
        <div className={style.projectContainer}>
            <div>
                <div className={style.imgContainer} style={{backgroundImage: `url(${props.src})`}}>
                    <a
                        href={props.projectLink}
                        className={style.link}>Go to project
                    </a>
                </div>
            </div>
            <h3>{props.title}</h3>
            <span className={style.progectDescription}>{props.description}</span>
        </div>
    );
};

export default Project;