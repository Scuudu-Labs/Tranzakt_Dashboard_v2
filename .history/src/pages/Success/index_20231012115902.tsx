import backgroundImage from "../../assets/background.svg";
import { ReactComponent as Login } from "../../assets/logo.svg";
import { ReactComponent as Success } from "../../assets/success.svg";


export default function ResetPassword() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-screen h-screen flex flex-col items-center justify-center"
    >
           <div className="flex justify-center mb-8 items-center ">
    <Login />
  </div>
      <div 
      className="bg-white w-[458px] relative flex flex-col items-center rounded-[8px] pt-14 mx-auto h-[446px]"
      >
        <div className="flex items-center justify-center">
            <Success />
        </div>
        <div className="flex w-[400px] mx-auto flex-col mb-8 gap-y-2">
        <h2 className="font-montserrat text-[32px] leading-[39px] text-[#272626] font-bold">Reset your password</h2>
      </div>
      </div>
    </div>
  );
}

