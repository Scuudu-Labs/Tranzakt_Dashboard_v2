import { AmountLoader } from '../ui/loader';
import { ReactComponent as InfoSvg } from '../../assets/icons/info.svg';
import { useState } from 'react';

export default function AmountInfoCard(props: {
  amount: string | number;
  change: number;
  label: string;
  loading?: boolean;
  filterType: string;
  info?: string;
  isReduction: boolean;
}) {
  const filterObject: { [k: string]: string } = {
    today: 'preious day',
    yesterday: 'previous day',
    'last week': 'previous week',
    'last month': 'previous month',
    'last year': 'previous year',
  };

  const [hover, setHover] = useState(false);

  const setMouse = () => setHover(true);
  const unsetMouse = () => setHover(false);

  return (
    <div className="w-full h-[107px] flex flex-col rounded-[16px] bg-white border-[1px] p-[16px] border-[#EAEAEA]">
      <div className="flex relative items-center">
        <p className="text-[#A1A1A1]  font-montserrat text-[11px] tracking-[0.3px] font-[500]">
          {props.label}
        </p>
        <button className="cursor-pointer p-1 group">
          <InfoSvg onMouseOver={setMouse} onMouseOut={unsetMouse} />
        </button>
        <div
          className={`absolute top-6 z-50 tooltip w-[220px] left-3 whitespace-normal break-words rounded-lg  bg-[#2AA768] px-4 py-3 font-montserrat text-[12px] font-normal  text-white focus:outline-none ${
            hover ? 'visible' : 'invisible'
          }`}
        >
          {props.info}
        </div>
      </div>
      <h2 className="font-montserrat font-semibold text-[21px] tracking-[0.5px] pt-1 pb-2 ">
        {props.loading ? <AmountLoader /> : props.amount}
      </h2>
      <div className="flex items-center">
        <span
          className={` ${
            props.isReduction ? 'text-[#FF2636]' : 'text-[#32C87D]'
          }  text-[12px] font-semibold tracking-[0.3px]`}
        >
          {`${props.isReduction ? '' : '+'} ${props.change}%`}
        </span>
        <span className="text-[#A1A1A1] text-[12px] lowercase font-[400] tracking-[0.3px] ml-2">
          than {filterObject[props.filterType]}
        </span>
      </div>
    </div>
  );
}
