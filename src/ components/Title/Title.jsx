import React from 'react';
import style from "./Title.module.scss";
import Fade from 'react-reveal/Fade';

const Title = ({title}) => {
    return (
        <div className={style.title}>
            <Fade top>
                <h2>{title}</h2>
            </Fade>
        </div>
    )
};

export default Title;