import { useForm } from "react-hook-form";
import { ReactComponent as Login } from "../../assets/logo.svg";
import { ReactComponent as SecureSvg } from "../../assets/secure.svg";
import { useNavigate } from "react-router-dom";


interface ResetPasswordData {
  email: string;
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<ResetPasswordData>({
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
      className="bg-white max-w-[500px] relative flex flex-col items-center rounded-[8px] pt-14 mx-auto h-[500px]"
      onSubmit={handleSubmit(onSumbit)}
    >
      <div className="flex w-[400px] mx-auto flex-col mb-12 gap-y-2">
        <h2 className="font-montserrat text-[32px] leading-[39px] text-[#272626] font-bold">Reset Password</h2>
        <p className="text-[#A1A1A1] text-[14px] leading-[17px]">Enter your registered email and we will send an OTP to reset your password</p>
      </div>
      <div className="flex w-[400px] mx-auto flex-col mb-6 gap-y-2">
        <label className="text-[12px]">Email Address</label>
        <input
          {...register("email", { required: true })}
          className="w-full rounded-md py-2 border outline-none h-[48px] border-[#A1A1A1] w-full placeholder-[#A1A1A1] px-2"
          placeholder="Enter email"
        ></input>
      </div>
    
      <button
        type="submit"
        onClick={() => navigate('/verify_account')}
        className="text-white bg-[#32C87D] w-[400px] mx-auto py-3 mb-2 mt-2 rounded-md"
      >
        Continue
      </button>
      <div className="absolute bottom-4">
      <SecureSvg />
    </div>
    </form>
    
   </div>
  );
}
