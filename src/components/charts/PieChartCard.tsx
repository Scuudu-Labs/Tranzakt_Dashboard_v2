import { PieChart, Pie } from 'recharts';
import ButtonLoader from '../button/buttonLoader';
import { ReactComponent as InfoSvg } from '../../assets/icons/info.svg';
import { useState } from 'react';

interface PieChartData {
  label: string;
  value: number;
  fill: string;
}

export default function PieChartCard(props: {
  data: {
    completed: number;
    pending: number;
    percentCompleted: number;
    percentPending: number;
  };
  label: string;
  sublabel?: number;
  type: string;
  info?: string;
  loading: boolean;
}) {
  const completed_data: PieChartData = {
    label: `${props.data.percentCompleted}% completed ${props.type}`,
    value: props.data.completed,
    fill: '#32C87D',
  };

  const [hover, setHover] = useState(false);
  const setMouse = () => setHover(true);
  const unsetMouse = () => setHover(false);
  const pending_data: PieChartData = {
    label: `${props.data.percentPending}% pending ${props.type}`,
    value: props.data.pending,
    fill: '#DCFFEA',
  };
  return (
    <div className="max-w-[266px] w-full border border-[#EAEAEA] rounded-[16px] px-[18px] min-h-[300px] bg-white  flex flex-col items-center py-5">
      <div className="flex flex-col w-full">
        <div className="flex relative items-center">
          <p className="text-[#3F3F3F] -ml-1 font-montserrat text-[16px] tracking-[0.3px] font-[600]">
            {props.label}
          </p>
          <button className="cursor-pointer p-2 group">
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
        <p className="text-xs text-[#A1A1A1]">{props.sublabel} users</p>
      </div>

      {props.loading ? (
        <div className="h-[120px] w-full flex items-center justify-center">
          <ButtonLoader />
        </div>
      ) : completed_data.value === 0 && pending_data.value === 0 ? (
        <div className="h-full w-full flex items-center justify-center">
          <span className="text-gray-400 font-semibold tracking-widest">
            NO DATA
          </span>
        </div>
      ) : (
        <PieChart width={160} height={160}>
          <Pie
            data={[completed_data, pending_data]}
            dataKey="value"
            nameKey="name"
            cx="50%"
            color=""
            cy="50%"
            innerRadius={40}
            outerRadius={80}
          />
        </PieChart>
      )}

      <div className="flex flex-col w-full mt-4 gap-x-2">
        <div className="flex gap-x-2 mb-3 text-xs">
          <div className={`h-[16px] w-[16px] bg-[#32C87D]`}></div>
          <span>{completed_data.label}</span>
        </div>

        <div className="flex capitalize gap-x-2 text-xs ">
          <div className={`h-[16px]  capitalize w-[16px] bg-[#DCFFEA]`}></div>
          <div>{pending_data.label}</div>
        </div>
      </div>
    </div>
  );
}
