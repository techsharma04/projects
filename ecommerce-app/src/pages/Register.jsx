import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Endpoints from "../api/EndPoints";
import '../styles/RegisterLogin.css';

const Register = () => {

    var random = require('random-string-alphanumeric-generator');
    const token = random.randomAlphanumeric(25, "lowercase");


    const [requestResponse, setRequestResponse] = useState({
        textMessage: '',
        alertClass: ''

    })
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        token: token
    };

    const onSubmit = (values, { resetForm }) => {
        axios.post(Endpoints.REGISTER_URL, values)
            .then(response => {
                console.log(response.data);
                setRequestResponse({
                    textMessage: "Registration Successfull...",
                    alertClass: "success-msg"
                });
            },
                (error) => {
                    setRequestResponse({
                        textMessage: "Something is wrong on our side...",
                        alertClass: "error-msg"
                    });
                }
            )
            .catch((error) => {
                console.log(error);
            });
        resetForm({ values: "", })
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('first name is required !'),
        lastName: Yup.string().required('last name is required !'),
        email: Yup.string().required('email is required !').email('email must be a valid email address !'),
        password: Yup.string().required('password is required !').min(8, 'password must be at least 8 characters !'),
        confirmPassword: Yup.string().required('confirm password is required !').min(8, 'password must be at least 8 characters !').equals([Yup.ref('password'), null], 'password and confirm password does not match')

    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    });

    return (

        <form onSubmit={formik.handleSubmit}>
            <div className="personal-details">
                <legend>Your Personal Details:</legend>
                <div className="form-fields">
                    <div className="inp-field">
                        <label htmlFor="">First Name</label>
                        <input type="text" className={formik.touched.firstName && formik.errors.firstName ? "form-control is-invalid" : "form-control"} name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.firstName && formik.errors.firstName ? (<small className="text-danger"> {formik.errors.firstName} </small>) : null}
                    </div>
                    <div className="inp-field">
                        <label htmlFor="">Last Name</label>
                        <input type="text" className={formik.touched.lastName && formik.errors.lastName ? "form-control is-invalid" : "form-control"} name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.lastName && formik.errors.lastName ? (<small className="text-danger"> {formik.errors.lastName} </small>) : null}
                    </div>
                    <div className="inp-field">
                        <label htmlFor="">Email</label>
                        <input type="text" className={formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control"} name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.email && formik.errors.email ? (<small className="text-danger"> {formik.errors.email} </small>) : null}
                    </div>
                </div>
            </div>
            <br />
            <div className="pass-details">
                <legend>Your Password:</legend>
                <div className="form-fields">
                    <div className="inp-field">
                        <label htmlFor="">Password</label>
                        <input type="password" className={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control"} name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.password && formik.errors.password ? (<small className="text-danger"> {formik.errors.password} </small>) : null}
                    </div>
                    <div className="inp-field">
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" className={formik.touched.confirmPassword && formik.errors.confirmPassword ? "form-control is-invalid" : "form-control"} name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<small className="text-danger"> {formik.errors.confirmPassword} </small>) : null}
                    </div>
                    <button type="submit" className="btn btn-outline-dark signup-btn" disabled={!formik.isValid}>Sign up</button>
                </div>
                <span className={requestResponse.alertClass} role="alert"> {requestResponse.textMessage} </span>
            </div>
        </form>




    );
};
export default Register;
