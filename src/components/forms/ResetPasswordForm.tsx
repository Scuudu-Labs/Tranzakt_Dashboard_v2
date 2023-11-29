import { LogoIcon, SecureIcon } from '../../assets';
import IconWrap from '../ui/svgWrapper';
import { useNavigate } from 'react-router-dom';
import TextInput from '../Input/TextInput';
import { useFormik } from 'formik';
import { initialPasswordReset, resetPasswordSchema } from './forms.schema';
import ButtonLoader from '../button/buttonLoader';
import { useForgotPasswordMutation } from '../../redux/api/auth';
import { toast } from 'react-toastify';

export default function LoginForm() {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const formik = useFormik<Pick<ILogin, 'email'>>({
    initialValues: initialPasswordReset,
    validationSchema: resetPasswordSchema,
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
  const navigate = useNavigate();

  const onSumbit = async () => {
    try {
      const res = await forgotPassword(values).unwrap();
      toast.success(res.message);
      localStorage.setItem('email', JSON.stringify(res?.data?.email));
      resetForm();
      navigate('/verify_account');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        className="bg-white max-w-[500px] relative flex flex-col items-center rounded-[8px] pt-14 mx-auto h-[500px]"
        onSubmit={handleSubmit}
      >
        <div className="flex w-[400px] mx-auto flex-col mb-12 gap-y-2">
          <h2 className="font-montserrat text-[32px] leading-[39px] text-[#272626] font-bold">
            Reset Password
          </h2>
          <p className="text-[#A1A1A1] text-[14px] leading-[22px]">
            Enter your registered email and we will send an OTP to reset your
            password
          </p>
        </div>
        <div className="w-[400px] flex flex-col items-center justify-center">
          <TextInput
            label="Email Address"
            error={errors.email ? errors.email : ''}
            touched={touched.email}
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            type="email"
          />

          <button
            type="submit"
            className="text-white bg-[#32C87D] flex items-center justify-center w-[400px] mx-auto py-3 mb-2 mt-2 rounded-md"
          >
            {isLoading ? <ButtonLoader /> : 'Continue'}
          </button>
          <div className="absolute bottom-4">
            <IconWrap src={SecureIcon} />
          </div>
        </div>
      </form>
    </div>
  );
}
