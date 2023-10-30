import * as yup from 'yup';

const loginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const resetPasswordSchema = yup.object().shape({
  email: yup.string().email().required(),
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
  initialPasswordReset,
};
