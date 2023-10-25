import * as yup from "yup";

const loginFormSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),  
})

const initialLogin = {
    email:'',
    password: '',
} 

export {loginFormSchema, initialLogin} 