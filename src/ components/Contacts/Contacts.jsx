import React from 'react';
import style from "./Contacts.module.css";
import styleContainer from "../../common/styles/Container.module.css";


const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contacts}>
                    {/*<form>*/}
                        <input/>
                        <input/>
                        <textarea/>
                    <button onClick={() => {}}>Send</button>
                    {/*</form>*/}
                </div>
            </div>
        </div>
    );
};

export default Contacts;