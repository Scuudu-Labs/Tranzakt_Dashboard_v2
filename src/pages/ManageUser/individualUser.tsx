import MainContainer from '../../components/layout/MainContainer';
import { useNavigate, useParams } from 'react-router-dom';
import StatusTag from '../../components/ui/statusTag';
import TransactionHistory from './transactionHistory';
import { useGetAUserQuery } from '../../redux/api/mangerUser';
import { useState } from 'react';
import PersonalDetails from './personalDetails';
import { amountFormatter } from '../../lib/text_formater';
import { AmountLoader } from '../../components/ui/loader';

const EachUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user, isLoading } = useGetAUserQuery(id as string);
  const [action, setAction] = useState('txt');
  console.log(user, 'users');
  return (
    <MainContainer>
      <div className="py-3 flex items-center cursor-pointer">
        <span
          className="text-gray-400  tracking-[0.3px] pl-3 pr-2 font-montserrat text-[14px]"
          onClick={() => navigate(-1)}
        >
          Manage User /{' '}
        </span>
        <span className="text-[#130e0e] tracking-[0.3px] font-montserrat text-[14px]">
          User Profile
        </span>
      </div>
      <div className="bg-white w-full border border-[#EAEAEA] rounded-[4px]  shadow-md">
        <div className="flex items-center  justify-between w-[82%] h-[120px] py-[12px] px-[28px]  mt-2">
          <div className="flex items-center">
            <img
              src="/profile.svg"
              alt="my_profile"
              className="w-[65px] h-[65px] rounded-[100px] mr-4"
            />
            <div className="flex flex-col">
              <h2 className="font-montserrat text-[18px]  font-semibold tracking-[0.3px] text-[#3F3F3F]">
                {isLoading ? <AmountLoader /> : user?.data?.full_name}
              </h2>
              <div className="flex mb-2 items-center">
                <span className="text-[14px] font-[600] pr-[0.5px] text-[#3F3F3F]">
                  {isLoading ? null : 'Email:'}
                </span>
                <span className="text-[#3F3F3F] text-[14px] font-[500] ml-[2px] font-montserrat">
                  {isLoading ? <AmountLoader /> : user?.data?.email}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col gap-x-3 ">
            <span className="text-[#3F3F3F] text-[14px] mb-2 font-montserrat">
              KYC Status
            </span>
            <StatusTag
              isLoading={isLoading}
              text={user?.data?.kyc_status ? 'completed' : 'pending'}
              id={user?.data?.kyc_status ? 'ACTIVE' : 'pending'}
            />
          </div>

          <div className="flex items-center flex-col  gap-x-3">
            <span className="text-[#3F3F3F] text-[14px] mb-2  font-montserrat">
              Account Status
            </span>
            <StatusTag
              isLoading={isLoading}
              text={user?.data?.account_status ?? '...'}
              id={user?.data?.account_status ?? '...'}
            />
          </div>

          <div className="flex items-center flex-col  gap-x-3">
            <span className="text-[#3F3F3F] text-[14px] mb-1  font-montserrat">
              Wallet Balance
            </span>
            <span className="text-black font-montserrat font-bold text-[26px]">
              {isLoading ? (
                <AmountLoader />
              ) : (
                `₦${new Intl.NumberFormat('en-NG').format(
                  amountFormatter(user?.data?.wallet_balance ?? 0)
                )}`
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full px-7">
        <div className="flex items-center mt-6">
          <span
            className={`mr-2 text-[12px] cursor-pointer rounded-y-[8px] px-[16px] py-[8px] ${
              action === 'txt' ? 'bg-green-100' : 'bg-shade-150'
            }`}
            onClick={() => setAction('txt')}
          >
            Transaction History
          </span>
          <span
            className={`px-[16px] text-[12px] cursor-pointer py-[8px] rounded-y-[8px] ${
              action === 'user' ? 'bg-green-100' : 'bg-shade-150'
            }`}
            onClick={() => setAction('user')}
          >
            User Details
          </span>
        </div>
        {action === 'txt' ? (
          <TransactionHistory
            transactions={user?.data?.txn}
            loading={isLoading}
          />
        ) : (
          <PersonalDetails userInfo={(user && user.data) as IUser} />
        )}
      </div>
    </MainContainer>
  );
};

export default EachUser;
