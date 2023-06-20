import React from 'react'
import style from './ApplicationForm.module.scss'

import { Formik, Field, ErrorMessage, Form } from 'formik';

export default function ApplicationForm({ message, setMessage }) {


    const styleInputActive = {
        top: "0",
        left: "15px",
        fontSize: "16px",
        padding: "0 2px",
        background: "rgb(30, 30, 30)"
    }

    const styleInputDesactive = {
        top: "50%",
        left: "15px",
        transform: "translateY(-50%)",
        color: "white",
        fontSize: "19px",
        pointerEvents: "none",
        transition: "all 200ms",
        background: "rgb(30, 30, 30)"
    }

    return (
        <Formik
            initialValues={{
                firstname: "",
                email: "",
                message: message.isActive ? message.text : "",
                phone: ""
            }}
            onSubmit={(valores, { resetForm }) => {
                console.log("enviado")
                setMessage(prev => ({ ...prev, isActive: false, text: "" }))
                resetForm()
            }}
            validate={(valores) => {
                let errores = {};

                if (!valores.firstname) {
                    errores.firstname = "First name is Required"
                }
                if (!valores.message) {
                    errores.message = "Message is Required"
                }

                if (!valores.email) {
                    errores.email = "Email is Required"
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                    errores.email = "Enter a valid email"
                }
                if (!valores.phone) {
                    errores.phone = "Phone is Required"
                } else if (/^\d{1,9}$/.test(valores.phone)) {
                    errores.phone = "Enter a valid phone"
                }
                return errores;
            }}

        >
            {({ errors, values }) => (
                <Form className={style.container}>
                    <div className={style.container__group}>
                        <div className={style.container__group__input}>
                            <Field className={style.container__group__input_input}
                                type="text"
                                id="firstname"
                                name="firstname"
                            />
                            <label style={values.firstname?.length > 0 ? styleInputActive : styleInputDesactive}>Enter First Name</label>
                        </div>
                        <ErrorMessage name='firstname' component={() => (<div className={style.container__group_error}><p>{errors.firstname}</p></div>)} />
                    </div>
                    <div className={style.container__group}>
                        <div className={style.container__group__input}>
                            <Field className={style.container__group__input_input}
                                type="number"
                                id="phone"
                                name="phone"
                            />
                            <label style={values.phone.toString?.length > 0 ? styleInputActive : styleInputDesactive}>Enter Phone</label>
                        </div>
                        <ErrorMessage name='phone' component={() => (<div className={style.container__group_error}><p>{errors.phone}</p></div>)} />
                    </div>
                    <div className={style.container__group}>
                        <div className={style.container__group__input}>
                            <Field className={style.container__group__input_input}
                                type="email"
                                id="email"
                                name="email"
                            />
                            <label style={values.email?.length > 0 ? styleInputActive : styleInputDesactive}>Enter Email</label>
                        </div>
                        <ErrorMessage name='email' component={() => (<div className={style.container__group_error}><p>{errors.email}</p></div>)} />
                    </div>
                    <div className={style.container__group}>
                        <div className={style.container__group__input}>
                            <Field className={`${style.container__group__input_input} ${style.container__group__input_textarea}`}
                                as="textarea"
                                type="text"
                                id="message"
                                name="message"

                            />
                            <label style={values.message?.length > 0 ? styleInputActive : styleInputDesactive}>Enter Message</label>
                        </div>
                        <ErrorMessage name='message' component={() => (<div className={style.container__group_error}><p>{errors.message}</p></div>)} />
                    </div>
                    <button type='submit' disabled={Object.values(errors).length !== 0} className={style.container_button}>Send</button>
                </Form>
            )}
        </Formik>
    )
}
