import { useForm } from "react-hook-form";
import { ReactComponent as Login } from "../../assets/logo.svg";
import { ReactComponent as SecureSvg } from "../../assets/secure.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HideSvg } from "../../assets/icons/hide.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { loginFormSchema } from "./forms.schema";
import TextInput from "../Input/TextInput";

interface LoginData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [hide, setHide] = useState(false)
  const { register, handleSubmit, formState:{errors} } = useForm<LoginData>({
    mode: "onTouched",
    resolver: yupResolver(loginFormSchema)
  }); 

  const navigate = useNavigate();
  const onSumbit = (data: ILogin) => {
    console.log(data)
  };



  return (
   <div className="w-full">
     <div className="flex justify-center mb-8 items-center ">
    <Login />
  </div>
    <form
      className="bg-white max-w-[500px] rounded-[8px] relative flex flex-col items-center justify-center mx-auto h-[530px]"
      onSubmit={handleSubmit(onSumbit)}
    >
      <div className="flex w-[400px] mx-auto flex-col mb-12 gap-y-2">
        <h2 className="font-montserrat text-[32px] leading-[39px] text-[#272626] font-bold">Login</h2>
        <p className="text-[#A1A1A1] text-[14px] leading-[17px]">Please enter your details to continue.</p>
      </div>
      
      <TextInput label="Email Address" />
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
