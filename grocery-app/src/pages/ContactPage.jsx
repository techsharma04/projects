import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "../components/Navbar";

const ContactPage = () => {

    const initialValues = {
        firstName: "",
        email: "",
        mobile: "",
        password: "",
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Full name is required'),
        email: Yup.string().required('Email is required').email('email must be a valid email address'),
        mobile: Yup.string().required('Mobile is required').min(10, "can't be less than 10 characters").max(10, "Can't be more than 10 characters"),
        message: Yup.string().required('Message is required').min(25, 'Message should be at least 25 characters')
    })


    return (
        <>
            <Navbar />
            <div className="container-full">
                <div className="container-inside">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="wrapper padding-50">
                                <h2>Leave us a msg & we'll handle the rest.</h2>
                                <hr />
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={onSubmit}
                                    validationSchema={validationSchema}
                                    validateOnMount
                                >
                                    {(formik) => {
                                        return (
                                            <Form onSubmit={formik.handleSubmit} className="form-display">
                                                <div className="mb-3">
                                                    <label htmlFor="">Full Name</label>
                                                    <Field
                                                        type="text"
                                                        name="fullName"
                                                        className={
                                                            formik.touched.fullName && formik.errors.fullName
                                                                ? "form-control is-invalid"
                                                                : "form-control"
                                                        }
                                                    />
                                                    <ErrorMessage name="fullName">
                                                        {(errorMessage) => (
                                                            <small className="text-danger">{errorMessage}</small>
                                                        )}
                                                    </ErrorMessage>
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="">Email</label>
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
                                                    <label htmlFor="">Mobile</label>
                                                    <Field
                                                        type="text"
                                                        name="mobile"
                                                        className={
                                                            formik.touched.mobile && formik.errors.mobile
                                                                ? "form-control is-invalid"
                                                                : "form-control"
                                                        }
                                                    />
                                                    <ErrorMessage name="mobile">
                                                        {(errorMessage) => (
                                                            <small className="text-danger">{errorMessage}</small>
                                                        )}
                                                    </ErrorMessage>
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="">Message</label>
                                                    <Field
                                                        type="textarea"
                                                        name="message"
                                                        className={
                                                            formik.touched.message && formik.errors.message
                                                                ? "form-control is-invalid"
                                                                : "form-control"
                                                        }
                                                    />
                                                    <ErrorMessage name="message">
                                                        {(errorMessage) => (
                                                            <small className="text-danger">{errorMessage}</small>
                                                        )}
                                                    </ErrorMessage>
                                                </div>

                                                <input
                                                    type="submit"
                                                    value="Submit Form"
                                                    className="btn btn-danger"
                                                    disabled={!formik.isValid}
                                                />
                                            </Form>
                                        );
                                    }}
                                </Formik>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactPage;