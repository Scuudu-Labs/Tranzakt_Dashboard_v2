import { useForm } from "react-hook-form";
import { ReactComponent as Login } from "../../assets/logo.svg";
import { ReactComponent as SecureSvg } from "../../assets/secure.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HideSvg } from "../../assets/icons/hide.svg";
import { useState } from "react";


interface LoginData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [hide, setHide] = useState(false)
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
        <h2 className="font-montserrat text-[32px] leading-[39px] text-[#272626] font-bold">Login</h2>
        <p className="text-[#A1A1A1] text-[14px] leading-[17px]">Please enter your details to continue.</p>
      </div>
      <div className="flex w-[400px] mx-auto flex-col mb-6 gap-y-2">
        <label className="text-[12px]">Email Address</label>
        <input
          {...register("email", { required: true })}
          className="w-full rounded-md py-2 border outline-none h-[48px] border-[#A1A1A1] w-full placeholder-[#A1A1A1] px-2"
          placeholder="Enter email"
        ></input>
      </div>
      <div className="flex w-[400px] mx-auto mb-6 relative flex-col gap-y-2">
      <div className="absolute right-4 cursor-pointer top-10" onClick={()=> setHide(!hide)}>
          <HideSvg />
        </div>
        <label className="text-[12px]">Password</label>
        <input
          {...register("password", { required: true, minLength: 6 })}
          className="w-full rounded-md py-2 h-[48px] text-[13px] border w-full outline-none border-[#A1A1A1] placeholder-[#A1A1A1] px-2"
          placeholder="Enter Password"
          type={hide ? "text" : "password"}
        ></input>
        <label
          className="text-[#A1A1A1] text-right text-[13px] cursor-pointer px-1"
          onClick={() => navigate('/reset_password')}
        >
          Forgot password? <span className="font-bold text-[#32C87D]">Click here</span>
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-[#32C87D] w-[400px] mx-auto py-3 mb-2 mt-2 rounded-md"
      >
        Login
      </button>
      <div className="absolute bottom-4">
      <SecureSvg />
    </div>
    </form>
    
   </div>
  );
}
