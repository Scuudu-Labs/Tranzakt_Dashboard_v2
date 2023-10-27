import { LegacyRef } from 'react';
import { GroupIcon } from '../../assets';
import IconWrap from '../ui/svgWrapper';
const OneNotify = () => {
  return (
    <div className="w-full py-[16px]  px-[16px] flex items-center border-b-[0.2px] border-[#A1A1A1]">
      <div className="max-w-[44px] w-full h-full max-h-[44px] rounded-[44px] bg-[#EBF9F2] text-center flex items-center justify-center mr-4">
        <IconWrap src={GroupIcon} />
      </div>
      <div className="flex w-full flex-col">
        <h2 className="font-montserrat font-[600] text-[16px] tracking-[0.3px] mb-2 text-[#3F3F3F]">
          20 users completed their KYC
        </h2>
        <div className="flex items-center  justify-between">
          <span className="text-[#707070] text-[14px] tracking-[0.3px] font-[500] font-montserrat">
            Fri, 2:00pm
          </span>
          <span className="text-[#3F3F3F] text-[14px] tracking-[0.3px] font-[500] font-montserrat">
            Fri, 2:00pm
          </span>
        </div>
      </div>
    </div>
  );
};

const NotificationCard = ({
  reference,
}: {
  reference: LegacyRef<HTMLDivElement>;
}) => {
  return (
    <div
      ref={reference}
      className="w-[432px] h-[400px] right-3 top-[85px] py-[16px] shadow-md z-50 absolute rounded-[8px] bg-white flex flex-col items-center"
    >
      <OneNotify />
      <OneNotify />
      <OneNotify />
      <OneNotify />
    </div>
  );
};

export default NotificationCard;
