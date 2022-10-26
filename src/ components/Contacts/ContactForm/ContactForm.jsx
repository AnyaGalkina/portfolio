import React from 'react';
import style from "./ContactForm.module.scss";
import styleLink from "../../../common/styles/Link.module.scss";
import {useFormik} from "formik";
import TextareaAutosize from '@mui/material/TextareaAutosize';

const ContactForm = () => {

    const formik = useFormik({
            initialValues: {text: ""},
            onSubmit: (values) => {
                // window.location.href = `tg://msg?text=${values.text}&to=@anna_blackbird`;
                window.location.href = `https://api.whatsapp.com/send?phone=+79629114695&text=${values.text}`;
            }
        }
    );


    return (
        <div className={style.formContainer}>
            <span className={style.text}>Send message to WhatsApp now</span>
            <form onSubmit={formik.handleSubmit} className={style.textarea}>
                <TextareaAutosize
                    style={{fontSize: "16px"}}
                    placeholder="Message"
                    minRows={8}
                    maxRows={8}
                    {...formik.getFieldProps("text")}/>
                <button
                    className={`${styleLink.link} ${style.button}`}
                    type="submit"
                >Send
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
