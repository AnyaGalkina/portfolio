import React from 'react';
import style from "./Contacts.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import Title from "../Title/Title";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";


const Contacts = () => {
    return (
        <div className={style.contactsBlock} id={"contacts"}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title title={"Contacts"}/>
                <div className={style.detailsContainer}>
                    <ContactForm/>
                    <ContactInfo/>
                </div>
            </div>
        </div>
    );
};

export default Contacts;