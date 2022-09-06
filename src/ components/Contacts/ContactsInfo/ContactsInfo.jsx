import React from 'react';
import style from "./ContactsInfo.module.scss"
import ContactInfo from "./ContactInfo/ContactInfo";

const ContactsInfo = ({contacts}) => {
    console.log(contacts)
    return (

        <div className={style.contactDetailsContainer}>
            {contacts.map(c => {
                return(
                    <ContactInfo
                        key={c.id}
                        link={c.link}
                        contactDetails={c.contactDetails}
                        imgComponent={c.imgComponent}
                    />
                )
            })}
        </div>
    );
};

export default ContactsInfo;