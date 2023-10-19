import backgroundImage from "../../assets/background.svg";
import ResetPasswordForm from "../../components/forms/ResetPasswordForm";


export default function ResetPassword() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-screen h-screen flex items-center justify-center"
    >
      <div 
      className="bg-white w-[500px] rounded-[8px] relative flex flex-col items-center pt-14 mx-auto h-[500px]"
      >
        <h1>Not Found</h1>
      </div>
    </div>
  );
}

