import React from 'react';
import style from "./Project.module.scss";
import {ImgCarusel} from "./ImgCarousel/ImgCarousel";
import {Divider} from "@mui/material";


const Project = ({imgSrc, title, main, description, technicalStack, gitHubLink, projectLink}) => {

    return (
        <div className={style.projectContainer}>
            <ImgCarusel images={imgSrc}/>
            <h3 className={style.title}>{title}</h3>

            <Divider className={style.divider}/>
            <span className={style.projectDescription}><b>{main}</b> {description}</span>
            <span className={style.projectDescription}><b>Technologies used: </b>{technicalStack}</span>

            <Divider className={style.divider}/>
            <span className={style.projectDescription}><b>Github link: </b>
                <a href={gitHubLink} className={style.projectLink}>{gitHubLink}</a>
            </span>
            <span className={style.projectDescription}><b>Web app link: </b>
                <a href={projectLink} className={style.projectLink}>{projectLink}</a>
            </span>
        </div>
    );
};

export default Project;