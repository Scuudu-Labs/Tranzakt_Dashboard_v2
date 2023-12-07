import { LegacyRef } from 'react';
import { ReactComponent as Logout } from '../../assets/icons/logout.svg';
import IconWrap from '../ui/svgWrapper';
import { useAppDispatch } from '../../redux/hooks';
import { setToken, setUser } from '../../redux/slice/auth';
import { useNavigate } from 'react-router-dom';
import { UserIcon } from '../../assets';

const ProfileCard = ({
  reference,
}: {
  reference: LegacyRef<HTMLDivElement>;
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onLogOut = () => {
    dispatch(setUser(null));
    dispatch(setToken(''));
    navigate('/');
  };
  return (
    <div
      ref={reference}
      className="w-[309px] min-h-[287px]  -top-[280px] left-[420px] py-[16px] absolute rounded-[8px] shadow-md bg-white flex flex-col items-center justify-center"
    >
      <div className="w-[71px] h-[71px] mt-4 rounded-[71px] bg-[#EBF9F2] flex items-center justify-center">
        <h2 className="uppercase text-[#3F3F3F] font-montserrat font-semibold text-center text-[25px]">
          OK
        </h2>
      </div>
      <h3 className="capitalize text-[#3F3F3F] font-montserrat  font-semibold text-center text-[18px] mt-4">
        Oloson Kate
      </h3>
      <span className="capitalize text-[#A1A1A1] font-montserrat text-center text-[12px]  my-2">
        UI/UX Designer
      </span>
      <div className="w-full p-4 flex items-center cursor-pointer border-y border-[#E3E3E3] mt-10">
        <IconWrap src={UserIcon} />
        <span className="text-[#3F3F3F] font-montserrat font-[500]  text-[16px] ml-4">
          Admin Profile
        </span>
      </div>
      <div
        className="w-full p-4 flex items-center cursor-pointer border-b border-[#E3E3E3]"
        onClick={onLogOut}
      >
        <Logout />
        <span className="text-[#FF2636] font-montserrat font-[500]  text-[16px] ml-4">
          Logout
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
