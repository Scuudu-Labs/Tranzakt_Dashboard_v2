import * as yup from 'yup';

const loginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const resetPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
});

const changePasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

const initialLogin = {
  email: '',
  password: '',
};

const initialPasswordReset = {
  email: '',
};

export {
  loginFormSchema,
  initialLogin,
  resetPasswordSchema,
  changePasswordSchema,
  initialPasswordReset,
};
