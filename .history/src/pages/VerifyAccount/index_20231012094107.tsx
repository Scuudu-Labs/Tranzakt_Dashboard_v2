import backgroundImage from "../../assets/background.svg";
import ResetPasswordForm from "../../components/forms/ResetPasswordForm";


export default function VerifyCode() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-screen h-screen flex items-center justify-center"
    >
      <ResetPasswordForm />
    </div>
  );
}

