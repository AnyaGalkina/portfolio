import React from "react";
import style from "./ContactInfo.module.scss";

const ContactInfo = ({link, contactDetails, imgComponent}) => {
    return (
        <div className={style.itemContainer}>
            {imgComponent}
            <a className={style.contactLink} href={link}>{contactDetails}</a>
        </div>
    );
};

export default ContactInfo;