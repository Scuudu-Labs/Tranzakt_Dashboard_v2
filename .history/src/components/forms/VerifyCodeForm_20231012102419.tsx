import { useForm } from "react-hook-form";
import { ReactComponent as Login } from "../../assets/logo.svg";
import { ReactComponent as SecureSvg } from "../../assets/secure.svg";
import { useNavigate } from "react-router-dom";
import VerificationCodeInput from "../lib/customInput/index";

interface LoginData {
  email: string;
  password: string;
}

export default function VerifyCodeForm() {
  const { register, handleSubmit } = useForm<LoginData>({
    mode: "onTouched",
  }); 

  const navigate = useNavigate();
  const onSumbit = (data) => {
    console.log(data)
  };
  return (
   <div className="w-full">
     <div className="flex justify-center mb-8 items-center ">
    <Login />
  </div>
    <form
      className="bg-white max-w-[500px] rounded-[8px] relative flex flex-col items-center justify-center mx-auto h-[500px]"
      onSubmit={handleSubmit(onSumbit)}
    >
      <div className="flex w-[400px] mx-auto flex-col mb-12 gap-y-2">
        <h2 className="font-montserrat text-[32px] leading-[39px] text-[#272626] font-bold">Account Verification</h2>
      </div>

    <div className="w-[400px]">
    <span
      className="text-[#A1A1A1] mb-5 w-[400px] mt-1 text-right text-[13px] cursor-pointer px-1"
      onClick={() => navigate('/reset_password')}
    >
     6-digit code
    </span>
      <VerificationCodeInput />
      <span
    className="text-[#A1A1A1] mt-2 w-[400px] mt-1 text-right text-[13px] cursor-pointer px-1"
  >
    6-digit verification code was sent to <b>olsonkae@gmail.com</b>
  </span>
    </div>     
      <button
        type="submit"
        className="text-white bg-[#32C87D] w-[400px] mx-auto py-3 mb-2 mt-2 rounded-md"
      >
        Verify
      </button>
      <label
          className="text-[#A1A1A1] w-[400px] mt-1 text-right text-[13px] cursor-pointer px-1"
          onClick={() => navigate('/reset_password')}
        >
          Didn't receive code? <span className="font-bold text-[#32C87D]">Resend</span>
        </label>
      <div className="absolute bottom-4">
      <SecureSvg />
    </div>
    </form>
    
   </div>
  );
}
