import { Dispatch, LegacyRef, SetStateAction } from 'react';
import { formatText } from '../../lib/text_formater';
import IconWrap from '../ui/svgWrapper';
import { DateIcon } from '../../assets';

const DateFilterModal = ({
  reference,
  type,
  close,
  setType,
}: {
  reference: LegacyRef<HTMLDivElement>;
  setType: Dispatch<SetStateAction<string>>;
  close: () => void;
  type: string;
}) => {
  const dates = ['today', 'yesterday', 'last_week', 'last_month', 'last_year'];
  const closeAction = (type: string) => {
    setType(type);
    close();
  };
  return (
    <div
      ref={reference}
      className="w-[230px] min-h-[240px] flex flex-col py-[16px] absolute z-[30] right-6 top-40 shadow-md justify-center bg-white rounded-[16px] "
    >
      {dates.map((date, index) => (
        <div
          className="flex items-center px-[16px] py-[14px] cursor-pointer"
          key={index}
          onClick={() => closeAction(date)}
        >
          <input
            type="radio"
            onChange={() => setType(date)}
            checked={type === date}
            className="w-4 h-4 text-green-600  focus:outline-none  dark:bg-gray-600 dark:border-gray-500"
          />
          <span className="font-montserrat capitalize text-[#111111] ml-2">
            {formatText(date)}
          </span>
        </div>
      ))}

      <div className="flex items-center mt-3 px-[16px] border-t border-[#E3E3E3] pt-4 pb-2 cursor-pointer">
        <IconWrap src={DateIcon} />
        <span className="font-montserrat text-[#111111] ml-2">
          Select Date Range
        </span>
      </div>
    </div>
  );
};

export default DateFilterModal;
