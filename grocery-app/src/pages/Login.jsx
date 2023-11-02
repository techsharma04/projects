import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Endpoints from "../api/EndPoints";

const LoginPage = () => {

    const navigate = useNavigate();

    const [requestResponse, setRequestResponse] = useState({
        textMessage: '',
        alertClass: '',
    })

    const initialValues = {
        email: "",
        password: "",
    };


    const onSubmit = (values) => {
        axios.post(Endpoints.LOGIN_URL, values)
            .then(response => {
                setRequestResponse({
                    textMessage: "Login successfully. Thank you",
                    alertClass: "alert alert-success"
                });
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user.firstName));
                navigate("/");
            },
                (error) => {
                    setRequestResponse({
                        textMessage: error.response.data.message,
                        alertClass: "alert alert-danger"
                    });
                }
            )
            .catch((error) => {
                console.log(error);
            });
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .required("email is required")
            .email("email must be a valid email"),
        password: Yup.string()
            .required("password is required")
            .min(6, "password must be at least 6 characters"),
    });

    return (
        <>
            <Navbar />
            <div className="container-full">
                <div className="container container-inside">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="wrapper">
                                <div class={requestResponse.alertClass} role="alert">
                                    {requestResponse.textMessage}
                                </div>
                                <h2>Login</h2>
                                <hr />
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
                                                    <label>Email</label>
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
                                                    <Field
                                                        type="password"
                                                        name="password"
                                                        className={
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

                                                <input
                                                    type="submit"
                                                    value="Login"
                                                    disabled={!formik.isValid}
                                                    className="btn btn-danger btn-block"
                                                />
                                            </Form>
                                        );
                                    }}
                                </Formik>

                                <br />
                                <p className="text-center">
                                    New User? <Link to="/register">Click Here</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default LoginPage;
