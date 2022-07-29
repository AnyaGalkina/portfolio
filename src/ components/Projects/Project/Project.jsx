import React from 'react';
import style from "./Project.module.css";

const Project = (props) => {


    return (
        <div className={style.projectContainer}>
            <div>
                <div className={style.imgContainer}
                     style={{backgroundImage: `url(${props.src})`,  backgroundPosition: 'center',
                    backgroundSize: 'cover',}}
                >
                    {/*<img src={props.src} alt={"project img"} className={style.img}/>*/}
                    <button
                        // onClick={() => {props.onClick}}
                        className={style.button}>Go to project
                    </button>
                </div>
            </div>
            <h3>{props.title}</h3>
            <span className={style.progectDescription}>{props.description}</span>
        </div>
    );
};

export default Project;