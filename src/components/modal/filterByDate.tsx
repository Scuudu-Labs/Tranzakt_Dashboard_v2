import { Dispatch, LegacyRef, SetStateAction } from 'react';
import { formatText } from '../../lib/text_formater';
import IconWrap from '../ui/svgWrapper';
import { DateIcon } from '../../assets';
import { DatePicker } from 'antd';
import { formatRangeDate } from '../../lib/dateFormater';

const DateFilterModal = ({
  reference,
  type,
  close,
  dateRange,
  setDateRange,
  setType,
}: {
  reference: LegacyRef<HTMLDivElement>;
  dateRange: boolean;
  setDateRange: Dispatch<SetStateAction<boolean>>;
  setType: Dispatch<SetStateAction<ISearches>>;
  close: () => void;
  type: ISearches;
}) => {
  const handleDateChange = (date: any) => {
    setType({
      period: 'custom_date',
      start_date: formatRangeDate(date[0]),
      end_date: formatRangeDate(date[1]),
    });
  };
  const dates = [
    'today',
    'yesterday',
    'last_week',
    'last 30 days',
    'last_year',
  ];
  const closeAction = (date: string) => {
    setType((prev) => {
      return {
        ...prev,
        period: date,
        end_date: null,
        start_date: null,
      };
    });
    close();
    setDateRange(false);
  };
  const { RangePicker } = DatePicker;
  return (
    <div
      ref={reference}
      className="w-[230px] min-h-[240px] flex flex-col py-[16px] absolute z-[30] right-6 top-40 shadow-md justify-center bg-white rounded-[16px] "
    >
      {dates.map((date, index) => (
        <div
          className="flex items-center px-[16px] py-[12px] cursor-pointer"
          key={index}
          onClick={() => closeAction(date)}
        >
          <input
            type="radio"
            onChange={() => closeAction(date)}
            checked={type.period === date}
            className="w-4 h-4 text-green-600 accent-green-600  focus:outline-none  dark:bg-gray-600 dark:border-gray-500"
          />
          <span className="font-montserrat capitalize text-[#111111] ml-2">
            {formatText(date)}
          </span>
        </div>
      ))}

      {dateRange ? (
        <div className="px-4 border-t z-100 w-full flex pt-4 items-end flex-col border-[#E3E3E3]">
          <RangePicker onChange={handleDateChange} />
        </div>
      ) : (
        <div
          className="flex items-center mt-3 px-[16px] border-t border-[#E3E3E3] pt-4 pb-2 cursor-pointer"
          onClick={() => setDateRange(true)}
        >
          <IconWrap src={DateIcon} />
          <span className="font-montserrat text-[#111111] ml-2">
            Select Date Range
          </span>
        </div>
      )}
    </div>
  );
};

export default DateFilterModal;
