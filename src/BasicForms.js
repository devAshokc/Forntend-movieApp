import React from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";

// const formValidationSchema = yup.object({
//     email: yup.string().min(8, "need a longer email🤔").required("Why not fill this email😅"),
//     password: yup.string().min(8, "need a longer password😁").max(12, "To much of password😅").required("Why not fill this password😅")
// })
// export function BasicForms() {
//     const formik = useFormik({
//         initialValues: { email: "a@.com", password: '' },
//         validationSchema: formValidationSchema,
//         onSubmit: (values) => {
//             console.log('onSubmit', values)
//         }
//     })
//     return <form onSubmit={formik.handleSubmit}>
//         <input name="email" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" placeholder="Email" />{formik.touched.email && formik.errors.email ? formik.errors.email : null}
//         <input name="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" placeholder="Password" />{formik.touched.password && formik.errors.password ? formik.errors.password : null}
//         <button type="submit">Submit</button>
//     </form>
// }


// yup.js
const formValidationSchema = yup.object({
    email: yup.string().min(8, "need a longer email🤔").required("Why not fill this email😅"),
    password: yup.string().min(8, "need a longer password😁").max(12, "To much of password😅").required("Why not fill this password😅")
})
// Object destructuring...
export function BasicForms() {
    const { handleSubmit, values, handleChange, touched, handleBlur, errors } = useFormik({
        initialValues: { email: "a@.com", password: '' },
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log('onSubmit', values)
        }
    })
    // Formic
    return <form onSubmit={handleSubmit}>
        <input name="email" value={values.email} onBlur={handleBlur} onChange={handleChange} type="email" placeholder="Email" />{touched.email && errors.email ? errors.email : null}
        <input name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} type="password" placeholder="Password" />{touched.password && errors.password ? errors.password : null}
        <button type="submit">Submit</button>
    </form>
}


