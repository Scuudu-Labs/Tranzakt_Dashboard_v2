import { useForm } from "react-hook-form";
import { ReactComponent as Login } from "../../assets/logo.svg";

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
     <div className="flex justify-center mb-8 items-center pt-10">
    <Login />
  </div>
    <form
      className="bg-white max-w-[500px] flex flex-col items-center justify-center mx-auto h-[500px]"
      onSubmit={handleSubmit(onSumbit)}
    >
      <div className="flex w-[372px] mx-auto flex-col gap-y-2">
        <h2 className="font-montserrat text-[32px] leading-[39px] text-[#272626] font-bold">Login</h2>
        <p>Please enter your details to continue.</p>
      </div>
      <div className="flex w-[372px] mx-auto flex-col gap-y-2">
        <label>Email</label>
        <input
          {...register("email", { required: true })}
          className="w-full rounded-md py-2 border border-[#A1A1A1] w-full placeholder-[#A1A1A1] px-2"
          placeholder="Enter email"
        ></input>
      </div>
      <div className="flex w-[372px] mx-auto flex-col gap-y-2">
        <label>Password</label>
        <input
          {...register("email", { required: true, minLength: 6 })}
          className="w-full rounded-md py-2 border w-full border-[#A1A1A1] placeholder-[#A1A1A1] px-2"
          placeholder="Enter Password"
        ></input>
        <label
          className="text-[#A1A1A1] cursor-pointer px-1"
          onClick={() => {}}
        >
          Forgot password? Click here
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-[#32C87D] w-[372px] mx-auto py-3 mb-2 mt-5 rounded-md"
      >
        Login
      </button>
    </form>
   </div>
  );
}
