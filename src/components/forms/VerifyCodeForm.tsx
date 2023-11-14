/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import VerificationCodeInput from '../lib/index';
import { LogoIcon, SecureIcon } from '../../assets';
import IconWrap from '../ui/svgWrapper';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  useForgotPasswordMutation,
  usePinValidationMutation,
} from '../../redux/api/auth';
import ButtonLoader from '../button/buttonLoader';
import { setToken } from '../../redux/slice/auth';
import { useAppDispatch } from '../../redux/hooks';

export default function VerifyCodeForm() {
  const [pinValidation, { isLoading }] = usePinValidationMutation();
  const [resend, setResend] = useState('resend');
  const [forgotPassword] = useForgotPasswordMutation();
  const dispatch = useAppDispatch();
  const adminEmail =
    JSON.parse(localStorage.getItem('email') as string) || null;

  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      pin: otp,
      email: adminEmail,
    };
    if (otp.length !== 6) return toast.error('incomplete code');
    try {
      const res = await pinValidation(data).unwrap();
      toast.success(res.message);
      dispatch(setToken(res?.data?.auth_token as string));
      navigate('/change_password');
    } catch (error: any) {
      toast.error(error.error as string);
    }
  };

  const resendEmail = async () => {
    setResend('sending...');
    try {
      const res = await forgotPassword({ email: adminEmail }).unwrap();
      toast.success(res.message);
      localStorage.setItem('email', JSON.stringify(res?.data?.email));
      setResend('Resend');
    } catch (error) {
      setResend('Resend');
      toast.error(error as string);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-center mb-8 items-center ">
        <IconWrap src={LogoIcon} />
      </div>
      <form
        className="bg-white max-w-[520px] rounded-[8px] relative flex flex-col items-center pt-14 mx-auto h-[500px]"
        onSubmit={handleSubmit}
      >
        <div className="flex w-[400px] mx-auto flex-col mb-6 gap-y-2">
          <h2 className="font-montserrat text-[32px] leading-[39px] text-[#272626] font-bold">
            Account Verification
          </h2>
        </div>

        <div className="w-[400px]">
          <span className="text-[#3F3F3F] w-[400px] font-500 mt-1 text-right text-[13px] cursor-pointer px-1">
            6-digit code
          </span>
          <VerificationCodeInput
            value={otp}
            valueLength={6}
            onChange={(value: string) => setOtp(value)}
          />
          <span className="text-[#3F3F3F] font-500  w-[400px] mt-1 text-right text-[11px] cursor-pointer px-1">
            6-digit verification code was sent to <b>{adminEmail}</b>
          </span>
        </div>
        <button
          type="submit"
          className="text-white text-center bg-[#32C87D] w-[400px] flex items-center justify-center mx-auto py-3 mb-2 mt-2 rounded-md"
        >
          {isLoading ? <ButtonLoader /> : 'Verfiy'}
        </button>
        <label
          onClick={resendEmail}
          className="text-[#A1A1A1] w-[400px] text-right text-[13px] cursor-pointer px-1"
        >
          Didn&lsquo;t receive code?{' '}
          <span className="font-bold capitalize text-[#32C87D]">{resend}</span>
        </label>
        <div className="absolute bottom-4">
          <IconWrap src={SecureIcon} />
        </div>
      </form>
    </div>
  );
}
