import backgroundImage from "../../assets/background.svg";
import { ReactComponent as Login } from "../../assets/logo.svg";


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

      </div>
    </div>
  );
}

