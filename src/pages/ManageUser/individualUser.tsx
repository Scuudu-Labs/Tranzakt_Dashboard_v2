import MainContainer from '../../components/layout/MainContainer';
import { useNavigate, useParams } from 'react-router-dom';
import StatusTag from '../../components/ui/statusTag';
import TransactionHistory from './transactionHistory';
import PersonalDetails from './personalDetails';
import { GoBackIcon, MailIcon, NetworkIcon, ShowIcon } from '../../assets';
import IconWrap from '../../components/ui/svgWrapper';
import { useGetAUserQuery } from '../../redux/api/mangerUser';
import { useState } from 'react';

const EachUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user } = useGetAUserQuery(id as string);
  const [show, setShow] = useState(false);
  const toggleCurrency = () => {
    setShow(!show);
  };
  return (
    <MainContainer>
      <div
        className="py-3 flex items-end cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <IconWrap src={GoBackIcon} />
        <span className="text-[18px] text-[#3F3F3F] font-montserrat font-[500] ml-3">
          Back
        </span>
      </div>
      <div className="flex items-center justify-between w-full h-[200px] py-[12px] px-[20px] border border-[#EAEAEA] rounded-[16px] bg-white shadow-md mt-2">
        <div className="flex items-center">
          <img
            src="/profile.svg"
            alt="my_profile"
            className="w-[100px] h-[100px] rounded-[100px] mr-4"
          />
          <div className="flex flex-col">
            <h2 className="font-montserrat text-[24px]  font-semibold tracking-[0.3px] text-[#3F3F3F]">
              {user?.data?.full_name ?? '...'}
            </h2>
            <div className="flex mb-2 items-center">
              <IconWrap src={MailIcon} />
              <span className="text-[#3F3F3F] text-[14px] font-[500] ml-[2px] font-montserrat">
                alessaabubakar@gmail.com
              </span>
            </div>
            <div className="flex items-center mb-3 gap-x-3 ">
              <span className="text-[#3F3F3F] text-[12px]  font-montserrat">
                KYC status:
              </span>
              <StatusTag text="completed" />
            </div>
            <div className="flex items-center mb-3 gap-x-3">
              <span className="text-[#3F3F3F] text-[12px]  font-montserrat">
                Account Status:
              </span>
              <StatusTag
                text={user?.data?.status ?? '...'}
                id={user?.data?.status ?? '...'}
              />
            </div>
            <div className="flex items-center">
              <span className="text-[#A1A1A1] text-[12px]  font-montserrat">
                Last online: Tues, 10:23am
              </span>
            </div>
          </div>
        </div>
        <div className="w-[290px] h-[146px] flex flex-col p-5 justify-between rounded-[8px] mr-2 bg-[#32C87D]">
          <div>
            <IconWrap src={NetworkIcon} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-white font-montserrat text-[16px] font-[500] tracking-[0.3px]">
                WALLET BALANCE
              </span>
              <span className="text-white font-montserrat font-bold text-[26px]">
                {show ? '₦145,000' : '* * * * * *'}
              </span>
            </div>
            <div className="cursor-pointer" onClick={toggleCurrency}>
              <IconWrap src={ShowIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full gap-4 my-6">
        <TransactionHistory />
        <PersonalDetails status={user?.data?.status ?? ''} />
      </div>
    </MainContainer>
  );
};

export default EachUser;
