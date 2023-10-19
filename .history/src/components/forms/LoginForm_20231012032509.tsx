import { useForm } from "react-hook-form";
import { ReactComponent as Login } from "../../assets/logo.svg";
import { ReactComponent as SecureSvg } from "../../assets/secure.svg";


interface LoginData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginData>({
    mode: "onTouched",
  }); 

  const onSumbit = () => {};
  return (
   <div className="w-full">
     <div className="flex justify-center mb-5 items-center ">
    <Login />
  </div>
    <form
      className="bg-white max-w-[500px] relative flex flex-col items-center justify-center mx-auto h-[500px]"
      onSubmit={handleSubmit(onSumbit)}
    >
      <div className="flex w-[400px] mx-auto flex-col mb-8 gap-y-2">
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
      <div className="flex w-[400px] mx-auto mb-6 flex-col gap-y-2">
        <label className="text-[12px]">Password</label>
        <input
          {...register("email", { required: true, minLength: 6 })}
          className="w-full rounded-md py-2 h-[48px] border w-full outline-none border-[#A1A1A1] placeholder-[#A1A1A1] px-2"
          placeholder="Enter Password"
        ></input>
        <label
          className="text-[#A1A1A1] text-right text-[13px] cursor-pointer px-1"
          onClick={() => {}}
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
