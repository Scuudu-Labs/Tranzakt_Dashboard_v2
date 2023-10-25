import backgroundImage from "../../assets/background.svg";
import VerifyCodeFrom from "../../components/forms/VerifyCodeForm";


export default function VerifyCode() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-screen h-screen flex items-center justify-center"
    >
      <VerifyCodeFrom />
    </div>
  );
}

