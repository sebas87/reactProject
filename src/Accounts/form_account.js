import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

class FormAccount extends React.Component{

    render() {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('First Name is required'),
                    accountNumber: Yup.string()
                        .required('Account Number is required'),
        
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null))
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="accountNumber">Account Number</label>
                            <Field name="accountNumber" type="text" className={'form-control' + (errors.accountNumber && touched.accountNumber ? ' is-invalid' : '')} />
                            <ErrorMessage name="accountNumber" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}
export default FormAccount;