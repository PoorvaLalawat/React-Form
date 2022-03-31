import * as Yup from 'yup'

export const userSchema = Yup.object({
    Name: Yup.string().required(),
    Email: Yup.string().email().required(),
    password: Yup.string().min(4).max(10).required(),
    Age: Yup.number().positive().integer().required(),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null]) 
});
