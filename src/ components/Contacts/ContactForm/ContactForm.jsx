import React from 'react';
import style from "./ContactForm.module.scss";
import styleLink from "../../../common/styles/Link.module.scss";

const ContactForm = () => {
    return (
        <div className={style.formContainer}>
            <form>
                <input type="text" placeholder={"Name"} />
                <input type="text" placeholder={"Email"}/>
                <textarea className={style.textarea}/>
                <button
                    className={`${styleLink.link} ${style.button}`}
                    type="submit"
                    onClick={() => {}}
                >Send message</button>
            </form>
        </div>
    );
};

export default ContactForm;
