import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const Verification1 = (props) => {

    const [requireLastName, setRequireLastName] = React.useState(false);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Gimme email dude not anything!').required(),
            lastName: requireLastName && Yup.string().required('Gimme this name bijacz!'),
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

    return (
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="firstName">First Name</label>
            <input type="text"{...formik.getFieldProps('firstName')}/>

            {requireLastName && (
                <>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text"{...formik.getFieldProps('lastName')}/>
                    {formik.touched.lastName && formik.errors.lastName && <div>{formik.errors.lastName}</div>}
                </>
            )}

            <label htmlFor="email">Email Address</label>
            <input type="email"{...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

            <button type="submit">Submit</button>
        </form>
    );
};

export default Verification1;
