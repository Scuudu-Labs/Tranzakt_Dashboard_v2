import { useForm } from "react-hook-form";
import { ReactComponent as Login } from "../../assets/logo.svg";
import { ReactComponent as SecureSvg } from "../../assets/secure.svg";
import { ReactComponent as HideSvg } from "../../assets/icons/hide.svg";

import { useNavigate } from "react-router-dom";

interface LoginData {
  password: string;
  confirm_password: string;

}

export default function ChangePasswordForm() {
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
      <div className="flex w-[400px] mx-auto flex-col mb-8 gap-y-2">
        <h2 className="font-montserrat text-[32px] leading-[39px] text-[#272626] font-bold">Reset your password</h2>
      </div>
      <div className="flex w-[400px] mx-auto flex-col mb-6 gap-y-2">
        <label className="text-[12px]">New Password</label>
        <input
          {...register("email", { required: true })}
          className="w-full rounded-md py-2 border outline-none h-[48px] border-[#A1A1A1] w-full placeholder-[#A1A1A1] px-2"
          placeholder="********"
          type="password"
        ></input>
      </div>
      <div className="flex relative w-[400px] mx-auto mb-6 flex-col gap-y-2">
        <label className="text-[12px]">Confirm Password</label>
        <input
          {...register("password", { required: true, minLength: 6 })}
          className="w-full rounded-md py-2 h-[48px] border w-full outline-none border-[#A1A1A1] placeholder-[#A1A1A1] px-2"
          placeholder="********"
          type="password"

        ></input>
        <div className="absolute right-2 top-10">
          <HideSvg />
        </div>
        <label
          className="text-[#A1A1A1] text-right text-[13px] cursor-pointer px-1"
          onClick={() => navigate('/reset_password')}
        >
          <span className="font-[500] text-[#32C87D]">Save Password</span>
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-[#32C87D] w-[400px] mx-auto py-3 mb-2 mt-2 rounded-md"
      >
        Reset my password
      </button>
      <div className="absolute bottom-4">
      <SecureSvg />
    </div>
    </form>
    
   </div>
  );
}
