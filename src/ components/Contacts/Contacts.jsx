import React from 'react';
import style from "./Contacts.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import Title from "../Title/Title";
import styleLink from "../../common/styles/Link.module.scss";


const Contacts = () => {
    return (
        <div className={style.contactsBlock} id={"contacts"}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title title={"Contacts"}/>
                <div className={style.detailsContainer}>
                    <div className={style.formContainer}>
                        <form>
                            <input type="text" />
                            <input type="text" />
                            <textarea className={style.textarea}/>
                            <button
                                className={styleLink.link}
                                type="submit"
                                onClick={() => {}}
                            >Send message</button>
                        </form>
                    </div>
                    <div className={style.contactDetailsContainer}>
                        <p>Phone number: +7........</p>
                        <p>Email:....@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;