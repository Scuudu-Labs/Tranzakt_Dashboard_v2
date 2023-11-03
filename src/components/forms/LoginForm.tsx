/* eslint-disable @typescript-eslint/no-explicit-any */
import { LogoIcon, SecureIcon } from '../../assets';
import IconWrap from '../ui/svgWrapper';
import { initialLogin, loginFormSchema } from './forms.schema';
import TextInput from '../Input/TextInput';
import PasswordInput from '../Input/PasswordInput';
import { useFormik } from 'formik';
import { useAdminLoginMutation } from '../../redux/api/auth';
import ButtonLoader from '../button/buttonLoader';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { setToken, setUser } from '../../redux/slice/auth';

interface LoginData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [adminLogin, { isLoading }] = useAdminLoginMutation();
  const formik = useFormik<LoginData>({
    initialValues: initialLogin,
    validationSchema: loginFormSchema,
    onSubmit: () => {
      onSumbit();
    },
  });

  const {
    values,
    errors,
    handleChange,
    resetForm,
    handleBlur,
    touched,
    handleSubmit,
  } = formik;

  const onSumbit = async () => {
    try {
      const res = await adminLogin(values).unwrap();
      toast.success(res.message);
      resetForm();
      dispatch(setToken(res?.data?.auth_token as string));
      dispatch(setUser(res.data));
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-center mb-8 items-center ">
        <IconWrap src={LogoIcon} />
      </div>
      <form
        className="bg-white max-w-[500px]  rounded-[8px] relative flex flex-col items-center justify-center mx-auto h-[530px]"
        onSubmit={handleSubmit}
      >
        <div className="flex w-[400px] mx-auto flex-col mb-12 gap-y-2">
          <h2 className="font-montserrat text-[32px] leading-[39px] text-[#272626] font-bold">
            Login
          </h2>
          <p className="text-[#A1A1A1] text-[14px] leading-[17px]">
            Please enter your details to continue.
          </p>
        </div>
        <div className="w-[400px] flex flex-col items-center justify-center">
          <TextInput
            label="Email Address"
            error={errors.email ? errors.email : ''}
            touched={touched.email}
            name="email"
            onChange={handleChange}
            value={values.email}
            placeholder="Enter email"
            onBlur={handleBlur}
            type="email"
          />
          <PasswordInput
            label="Password"
            error={errors.password ? errors.password : ''}
            touched={touched.password}
            name="password"
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
          />
          <button
            type="submit"
            className="text-white bg-[#32C87D] w-[400px] flex items-center justify-center mx-auto py-3 mb-2 mt-2 rounded-md"
          >
            {isLoading ? <ButtonLoader /> : 'Login'}
          </button>
          <div className="absolute bottom-4">
            <IconWrap src={SecureIcon} />
          </div>
        </div>
      </form>
    </div>
  );
}
