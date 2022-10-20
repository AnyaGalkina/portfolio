import React from 'react';
import style from "./ContactForm.module.scss";
import styleLink from "../../../common/styles/Link.module.scss";
import {useFormik} from "formik";
import TextareaAutosize from '@mui/material/TextareaAutosize';

const ContactForm = () => {

    const formik = useFormik({
            initialValues: {text: ""},
            onSubmit: (values) => {
                debugger
                // window.location.href = `tg://msg?text=${values.text}&to=@anna_blackbird`;
                window.location.href = `https://api.whatsapp.com/send?phone=+79629114695&text=${values.text}`;
            }
        }
    );

    // const onSubmitClickHandler = (e) => {
    //     tg://msg?text=test&to=anna_blackbird
    // }
    // e.preventDefault();
    // axios.post("http://localhost:3010/")
    //     .then(()=> {
    //         alert("Your message was send")
    //     })

    //     tg://msg?text=test&to=anna_blackbird
    //
    // }

    return (
        <div className={style.formContainer}>
            <span className={style.text}>Send message to WhatsApp now</span>
            <form onSubmit={formik.handleSubmit} className={style.textarea}>
                {/*<input type="text" placeholder={"Name"}  name={"name"}/>*/}
                {/*<input type="text" placeholder={"Email"}  name={"email"}/>*/}
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
