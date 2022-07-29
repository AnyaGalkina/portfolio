import React from 'react';
import style from "./Contacts.module.css";
import styleContainer from "../../common/styles/Container.module.css";


const Contacts = () => {
    return (
        <div className={style.contactsBlock} id={"contacts"}>

            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.detailsContainer}>
                    <div className={style.formContainer}>
                        <form>
                            <input className={style.input}/>
                            <input className={style.input}/>
                            <textarea className={style.textarea}/>
                            <button onClick={() => {
                            }}>Send message
                            </button>
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