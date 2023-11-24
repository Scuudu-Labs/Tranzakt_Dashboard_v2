/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-toastify';
import {
  useActivateAUserMutation,
  useDeActivateAUserMutation,
} from '../../redux/api/mangerUser';
import { useParams } from 'react-router-dom';
import ButtonLoader from '../../components/button/buttonLoader';

enum IToggleStatus {
  ACTIVE = 'ACTIVE',
  DEACTIVATED = 'DEACTIVATED',
}

const DisplayBox = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="w-full flex flex-col px-[16px] py-[10px] h-[70px]  border-[0.5px] border-[#A1A1A1] rounded-[8px]">
      <span className="text-[#3F3F3F] text-[12px] capitalize font-montserrat pb-1">
        {title}
      </span>
      <h2 className="text-[#272626] text-[16px] tracking-[0.3px] font-montserrat font-[500] ">
        {value}
      </h2>
    </div>
  );
};

const PersonalDetails = ({ userInfo }: { userInfo: IUser }) => {
  const { id } = useParams();

  const [activateAUser, { isLoading: activating }] = useActivateAUserMutation();
  const [deActivateAUser, { isLoading: deActivating }] =
    useDeActivateAUserMutation();

  const statusToggleAction = async () => {
    if (userInfo.account_status === IToggleStatus.ACTIVE) {
      try {
        await deActivateAUser(id as string).unwrap();
      } catch (error: any) {
        toast.error(error.error);
      }
    } else {
      try {
        await activateAUser(id as string).unwrap();
      } catch (error: any) {
        toast.error(error.error);
      }
    }
  };

  return (
    <div className="w-full rounded-[8px] py-4  bg-white  border-[#EAEAEA] border shadow-sm">
      <h1 className="text-[#3F3F3F] px-4 text-[18px]  font-montserrat mb-3">
        Personal Details
      </h1>
      <div className="h-[380px] overflow-auto">
        <div className="grid grid-rows-5  overflow-y-auto  px-4 grid-cols-2 gap-4">
          <DisplayBox title="first name" value={userInfo?.first_name ?? ''} />
          <DisplayBox title="Last name" value={userInfo?.last_name ?? ''} />
          <DisplayBox title="DOB" value={userInfo?.dob?.split('T')[0] ?? ''} />
          <DisplayBox title="Gender" value={userInfo?.gender ?? ''} />
          <div className="col-span-2">
            <DisplayBox title="Email" value={userInfo?.email ?? ''} />
          </div>
          <DisplayBox
            title="Phone Number"
            value={userInfo?.phone_number ?? ''}
          />
          <DisplayBox title="User ID" value={userInfo?.user_id} />
          <div className="col-span-2">
            <DisplayBox title="Occupation" value="Cooperate Worker" />
          </div>
          <div className="col-span-2">
            <button
              onClick={statusToggleAction}
              type="submit"
              className={`text-white flex items-center justify-center gap-x-3 w-full mx-auto py-3 mb-2 mt-2 rounded-md ${
                status !== IToggleStatus.ACTIVE
                  ? 'bg-[#32C87D]'
                  : 'bg-[#FF2636]'
              }`}
            >
              {status !== IToggleStatus.ACTIVE ? 'Activate' : 'Deactivate'}
              {(activating || deActivating) && <ButtonLoader />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
