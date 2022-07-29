import React from 'react';
import Project from "./Project/Project";
import styleContainer from "../../common/styles/Container.module.css";
import style from "./Projects.module.css";
import todoImg from "../../images/flat-lay-notebook-with-list-desk.jpg";
import financeImg from "../../images/close-up-education-economy-objects.jpg";
import socialMediaImg from "../../images/6976388_4575.jpg";
import {useNavigate} from "react-router-dom"



const Projects = () => {
    const  navigation = useNavigate();

    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project
                        title={"Todolist"}
                        description={'One of my specialties is taking aklcmasknmc'}
                        src={todoImg}
                        // onClick={navigation("https://anyagalkina.github.io/rock-paper-scissors-game-react/")}
                    />
                    <Project
                        title={"Social Network"}
                        description={'One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics '}
                        src={socialMediaImg }
                        // onClick={navigation("")}
                    />
                    <Project
                        title={"Finance Tracker"}
                        description={'One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics '}
                        src={financeImg}
                        // onClick={navigation("")}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;