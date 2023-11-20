/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate } from 'react-router-dom';
import { LogoIcon, SecureIcon } from '../../assets';
import IconWrap from '../ui/svgWrapper';
import { useFormik } from 'formik';
import { changePasswordSchema } from './forms.schema';
import PasswordInput from '../Input/PasswordInput';
import { useResetPasswordMutation } from '../../redux/api/auth';
import { toast } from 'react-toastify';
import ButtonLoader from '../button/buttonLoader';

interface changePasswrordData {
  password: string;
  confirm_password: string;
}

export default function ChangePasswordForm() {
  const [resetPasswword, { isLoading }] = useResetPasswordMutation();
  const navigate = useNavigate();
  const formik = useFormik<changePasswrordData>({
    initialValues: {
      password: '',
      confirm_password: '',
    },
    validationSchema: changePasswordSchema,
    onSubmit: () => {
      onSubmit();
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

  const onSubmit = async () => {
    try {
      const res = await resetPasswword({ password: values.password }).unwrap();
      toast.success(res.message);
      resetForm();
      navigate('/success');
    } catch (error: any) {
      toast.error(error.error as string);
    }
  };
  return (
    <div className="w-full">
      <div className="flex justify-center mb-8 items-center ">
        <IconWrap src={LogoIcon} />
      </div>
      <form
        className="bg-white max-w-[500px] rounded-[8px] relative flex flex-col items-center justify-center mx-auto h-[500px]"
        onSubmit={handleSubmit}
      >
        <div className="flex w-[400px] mx-auto flex-col mb-8 gap-y-2">
          <h2 className="font-montserrat text-[32px] leading-[39px] text-[#272626] font-bold">
            Reset your password
          </h2>
        </div>
        <PasswordInput
          label="Password"
          error={errors.password ? errors.password : ''}
          touched={touched.password}
          name="password"
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
        />
        <PasswordInput
          label="Confirm Password"
          error={errors.confirm_password ? errors.confirm_password : ''}
          touched={touched.confirm_password}
          name="confirm_password"
          onChange={handleChange}
          value={values.confirm_password}
          onBlur={handleBlur}
        />
        <button
          type="submit"
          className="text-white bg-[#32C87D] w-[400px] flex items-center justify-center mx-auto py-3 mb-2 mt-2 rounded-md"
        >
          {isLoading ? <ButtonLoader /> : 'Reset my password'}
        </button>
        <div className="absolute bottom-4">
          <IconWrap src={SecureIcon} />
        </div>
      </form>
    </div>
  );
}
