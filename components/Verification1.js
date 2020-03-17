import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MyDropzone from "./MyDropzone";

const Verification1 = (props) => {
    const [requireLastName, setRequireLastName] = React.useState(false);
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            file: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email format').required(),
            lastName: requireLastName && Yup.string().required('Name is required'),
            file: Yup.mixed().required('File is required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validateOnMount: true
    });

    React.useEffect(() => {
        props.updateParent(formik.isValid);
    }, [formik.isValid]);

    React.useEffect(() => {
        const firstNamePresent = Boolean(formik.values.firstName);

        if (requireLastName !== firstNamePresent) {
            setRequireLastName(firstNamePresent);
        }
    }, [formik.values.firstName]);

    console.log(formik);

    return (
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="firstName">First Name</label>
            <input type="text"{...formik.getFieldProps('firstName')}/>

            {requireLastName && (
                <>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" {...formik.getFieldProps('lastName')}/>
                    {formik.touched.lastName && formik.errors.lastName && <div>{formik.errors.lastName}</div>}
                </>
            )}

            <label htmlFor="email">Email Address</label>
            <input type="email" {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

            <MyDropzone name={'file'} setFieldValue={formik.setFieldValue} setTouched={(name) => formik.setTouched({...formik.touched, name})}/>
            {formik.touched.file && formik.errors.file && <div>{formik.errors.file}</div>}

            <button type="submit">Submit</button>
        </form>
    );
};

export default Verification1;
