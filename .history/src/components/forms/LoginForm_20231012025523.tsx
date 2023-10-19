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
     <div className="flex justify-center items-center pt-10">
    <Login />
  </div>
    <form
      className="bg-white max-w-[500px] mx-auto"
      onSubmit={handleSubmit(onSumbit)}
    >
    
      <div className="flex flex-col gap-y-2">
        <label>Email</label>
        <input
          {...register("email", { required: true })}
          className="w-full rounded-md py-2 border border-[#A1A1A1] placeholder-[#A1A1A1] px-2"
          placeholder="Enter email"
        ></input>
      </div>
      <div className="flex flex-col gap-y-2">
        <label>Password</label>
        <input
          {...register("email", { required: true, minLength: 6 })}
          className="w-full rounded-md py-2 border border-[#A1A1A1] placeholder-[#A1A1A1] px-2"
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
        className="text-white bg-[#32C87D] w-full py-3 mb-2 mt-5 rounded-md"
      >
        Login
      </button>
    </form>
   </div>
  );
}
