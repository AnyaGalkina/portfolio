import React from 'react';
import {FaEnvelope, FaPhoneAlt} from "react-icons/fa";
import style from "./ContactInfo.module.scss"

const ContactInfo = () => {
    return (
        <div className={style.contactDetailsContainer}>
            <div className={style.itemContainer }>
                <FaPhoneAlt className={style.itemImg}/>
                <p>+79629114695</p>
            </div>
            <div className={style.itemContainer}>
                <FaEnvelope className={style.itemImg}/>
                <p>anna.blackbird1@gmail.com</p>
            </div>
        </div>
    );
};

export default ContactInfo;