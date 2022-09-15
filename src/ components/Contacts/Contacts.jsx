import React from 'react';
import style from "./Contacts.module.scss";
import Title from "../Title/Title";
import ContactsInfo from "./ContactsInfo/ContactsInfo";
import ContactForm from "./ContactForm/ContactForm";


const Contacts = ({contacts}) => {
    return (
        <div className={style.contactsBlock} id={"contacts"}>
            <div className={style.contactContainer}>
                <Title title={"Contacts"}/>
                <div className={style.detailsContainer}>
                    <ContactForm/>
                    <ContactsInfo contacts={contacts}/>
                </div>
            </div>
        </div>
    );
};

export default Contacts;