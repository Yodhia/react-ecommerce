import React from 'react';
// relevant imports from formik
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { useLocation } from 'wouter';

function RegisterPage() {

    // useLocation returns two value
    // first parameter: location => the current route URL
    // second parameter: setLocation => allow us to set the location
    const [location,setLocation]= useLocation();

    // creater a Yup schema for validation
    const validationSchema = Yup.object ({
        name: Yup.string().required("Please enter your name"),
        email: Yup.string().email('Invalid email address').required("Please enter your email"),
        password: Yup.string().required("Please provide a password").min(4, "Password must be at least 8 characters"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Password must match").required("Please type in your password again"),
        salutation: Yup.string().required("Salutation is required"),
        country: Yup.string().required('Country is required')
    })

    // 1. Create an object to store the initial calues from all the fields
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "", // <-- to ensure password has been entered correctly
        salutation: "",
        marketingPreferences: [], // <-- checkboxes, so use an array
        country: "",
    };

    // 2. handle the form being submitted -- will be called by Formik when the user presses the submit button.
    // parameter 1: the values from the form (an object containing all the data in the form, like req.body)
    // parameter 2: an object, known as the formikHelpers, has a number of utility functions
    const handleSubmit = async (values, formikHelpers) => {
        
        try {
            
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/register`, values);
        formikHelpers.setSubmitting(false); // indicate the form is not being submitted
        // (i.e we have processed the form) 

        } catch (e) {
            alert("Error Registration = " + e);
        } finally {
            // the finally block of a try... catch will always run  regardless if there's any exception at all
            setLocation("/"); // go back to a the / route
        }

    };


    return (
        <div className="container mt-5">
            <h1>Register</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >

                {
                  (formik) => (
                    <Form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <Field type="text" className="form-control" id="name" name="name" />
                        {formik.errors.name && formik.touched.name && <div className="text-danger">{formik.errors.name}</div> }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <Field type="email" className="form-control" id="email" name="email" />
                        {formik.errors.email && formik.touched.email && <div className="text-danger">{formik.errors.email}</div> }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <Field type="password" className="form-control" id="password" name="password" />
                        {formik.errors.password && formik.touched.password && <div className="text-danger">{formik.errors.password}</div> }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <Field type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
                        {formik.errors.confirmPassword && formik.touched.confirmPassword && <div className="text-danger">{formik.errors.confirmPassword}</div> }
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Salutation</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="salutation" id="mr" value="Mr" />
                                <label className="form-check-label" htmlFor="mr">Mr</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="salutation" id="ms" value="Ms" />
                                <label className="form-check-label" htmlFor="ms">Ms</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="salutation" id="mrs" value="Mrs" />
                                <label className="form-check-label" htmlFor="mrs">Mrs</label>
                            </div>
                        </div>
                        {formik.errors.salutation && formik.touched.salutation && <div className="text-danger">{formik.errors.salutation}</div> }
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Marketing Preferences</label>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" value="email" name="marketingPreferences" />
                            <label className="form-check-label" htmlFor="emailMarketing">Email Marketing</label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" type="checkbox" value="sms" name="marketingPreferences" />
                            <label className="form-check-label" htmlFor="smsMarketing">SMS Marketing</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">Country</label>
                        <Field as="select" className="form-select" id="country" name="country">
                            <option value="">Select Country</option>
                            <option value="sg">Singapore</option>
                            <option value="my">Malaysia</option>
                            <option value="in">Indonesia</option>
                            <option value="th">Thailand</option>
                        </Field>
                        {formik.errors.country && formik.touched.country && <div className="text-danger">{formik.errors.country}</div> }
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>Register</button>
                </Form>

                  ) 
                }
              


            </Formik>
        </div>
    );
}

export default RegisterPage;