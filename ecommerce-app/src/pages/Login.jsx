import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Endpoints from "../api/EndPoints";
import Header from "../pages/HeaderPage";
import FooterPage from "./FooterPage";
import Register from "./Register";

const Login = () => {

    const navigate = useNavigate();
    const [login, setLogin] = useState({
        textMessage: "",
        alertClass: ""
    })

    const initialValues = {
        email: "",
        password: "",
    };


    const onSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await axios.get(`${Endpoints.LOGIN_URL}?email=${values.email}&password=${values.password}`);
            if (response.data.length > 0) {
                response.data.forEach((users) => {
                    console.log(response.data)
                    setLogin({
                        textMessage: "Login successfully. Redirecting...",
                        alertClass: "success-msg"
                    });
                    localStorage.setItem('token', users.token);
                    localStorage.setItem('id', users.id);
                    localStorage.setItem('email', users.email);
                    localStorage.setItem('fname', users.firstName);
                    localStorage.setItem('lname', users.lastName);
                });
                setTimeout(() => {
                    navigate("/myaccount");
                }, 1500);

            } else {
                setLogin({
                    textMessage: "Wrong credential. Please retry...",
                    alertClass: "error-msg"
                });
            }
        } catch (error) {
            console.error('Login failed', error);
            setLogin({
                textMessage: "Server is not running. Please start the jSon server first.",
                alertClass: "error-msg"
            });
        }
        setSubmitting(false);
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .required("email is required")
            .email('email address is not valid'),
        password: Yup.string()
            .required("password is required")
            .min(6, "password must be at least 6 characters"),
    });

    return (
        <div className="homepage">
            <Header />
            <hr />
            <Navbar />
            <hr />
            <div className="register_area login_area">
                <div className="register-full">
                    <div className="form-sidebar">
                        <div className="login-form">
                            <legend>NEW CUSTOMER</legend>
                            <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                            <Register />
                        </div>
                        <div className="login-form">
                            <div className="form-heading">
                                <legend>RETURNING CUSTOMER</legend>
                                <p>If you do not have an account with us, Please click on register button.</p>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                                validationSchema={validationSchema}
                                validateOnMount
                            >
                                {(formik) => {
                                    return (
                                        <Form className="form-display">
                                            <div className="mb-3">
                                                <label>Email Address</label>
                                                <Field
                                                    type="text"
                                                    name="email"
                                                    className={
                                                        formik.touched.email && formik.errors.email
                                                            ? "form-control is-invalid"
                                                            : "form-control"
                                                    }
                                                />
                                                <ErrorMessage name="email">
                                                    {(errorMessage) => (
                                                        <small className="text-danger">{errorMessage}</small>
                                                    )}
                                                </ErrorMessage>
                                            </div>

                                            <div className="mb-3">
                                                <label>Password</label>
                                                <Field type="password" name="password" className={
                                                    formik.touched.password && formik.errors.password
                                                        ? "form-control is-invalid"
                                                        : "form-control"
                                                }
                                                />
                                                <ErrorMessage name="password">
                                                    {(errorMessage) => (
                                                        <small className="text-danger">{errorMessage}</small>
                                                    )}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-fields-login">
                                                <Link to="" className="decoration-remove"><label>Forgotten Password</label></Link>
                                                <button type="submit" className="btn btn-outline-dark signup-btn" disabled={!formik.isValid}>Login</button>
                                            </div>
                                            <div>
                                                <span className={login.alertClass} role="alert"> {login.textMessage} </span>
                                            </div>
                                        </Form>
                                    );
                                }}
                            </Formik>
                        </div>
                        <div className="sidebar">
                            <legend>ACCOUNT SETTINGS</legend>
                            <Link to="" className="login-click decoration-remove"><small>Register / Login</small></Link>
                            <Link to="" className="login-click decoration-remove"><small>Forgotten Password</small></Link>
                            <Link to="" className="login-click decoration-remove"><small>My Account</small></Link>
                            <Link to="" className="login-click decoration-remove"><small>Address Book</small></Link>
                            <hr />
                            <legend>MY ORDERS</legend>
                            <Link to="" className="login-click decoration-remove"><small>Order History</small></Link>
                            <Link to="" className="login-click decoration-remove"><small>Downloads</small></Link>
                            <Link to="" className="login-click decoration-remove"><small>Returns</small></Link>
                            <Link to="" className="login-click decoration-remove"><small>Transactions</small></Link>
                            <hr />
                            <legend>MY STUFF</legend>
                            <Link to="" className="login-click decoration-remove"><small>Wish List</small></Link>
                            <Link to="" className="login-click decoration-remove"><small>Reward Points</small></Link>
                            <Link to="" className="login-click decoration-remove"><small>Newsletter</small></Link>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <FooterPage />
            <hr />
        </div>
    );
};
export default Login;
