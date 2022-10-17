import React from 'react';
import style from "./Project.module.scss";
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import {ImgCarusel} from "./ImgCarousel/ImgCarousel";


const Project = ({imgSrc, title, main, description, technicalStack, gitHubLink, projectLink, mobileResponsive}) => {

    return (
        <div className={style.projectContainer}>
            <ImgCarusel images={imgSrc}/>
            <h3 className={style.title}>{title}</h3>


            <span className={style.projectDescription}><b>{main}</b> {description}</span>
            <span className={style.projectDescription}><b>Technologies used: </b>{technicalStack}</span>
            <span className={style.projectDescription}><b>Github link: </b>
                <a href={gitHubLink} className={style.projectLink}>{gitHubLink}</a>
            </span>
            <span className={style.projectDescription}><b>Web app link: </b>
                <a href={projectLink} className={style.projectLink}>{projectLink}</a>
            </span>
            {/*<span className={style.projectDescription}><b>Mobile responsive: </b> {mobileResponsive ? <DoneIcon/> :*/}
            {/*    <ClearIcon/>}</span>*/}

        </div>
    );
};

export default Project;