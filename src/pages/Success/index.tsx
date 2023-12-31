import { LogoIcon, SuccessIcon } from '../../assets';
import backgroundImage from '../../assets/background.svg';
import IconWrap from '../../components/ui/svgWrapper';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-screen h-screen flex flex-col items-center justify-center"
    >
      <div className="flex justify-center mb-8 items-center ">
        <IconWrap src={LogoIcon} />
      </div>
      <div className="bg-white w-[458px] relative flex justify-center flex-col items-center rounded-[8px] pt-14 mx-auto h-[400px]">
        <div className="flex items-center justify-center">
          <IconWrap src={SuccessIcon} />
        </div>
        <div className="flex w-[400px] items-center mx-auto flex-col mb-8 gap-y-2">
          <h2 className="font-montserrat text-[24px] text-center leading-[39px] text-[#272626] font-bold">
            Successful password reset
          </h2>
          <p className="text-[#3F3F3F] text-center w-[300px] text-[14px] leading-[22px]">
            You can now use the new password to login into your account
          </p>
          <button
            type="submit"
            onClick={() => navigate('/')}
            className="text-white bg-[#32C87D] w-[400px] mx-auto py-3 mb-2 mt-6 rounded-md"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
