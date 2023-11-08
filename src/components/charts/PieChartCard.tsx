import { PieChart, Pie } from 'recharts';

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
}) {
  const data_one: PieChartData = {
    label: `${props.data.percentCompleted}% completed ${props.type}`,
    value: props.data.completed,
    fill: '#32C87D',
  };

  const data_two: PieChartData = {
    label: `${props.data.percentPending}% pending ${props.type}`,
    value: props.data.pending,
    fill: '#DCFFEA',
  };

  return (
    <div className="max-w-[266px] w-full border border-[#EAEAEA] rounded-[16px] px-[18px] min-h-[300px] bg-white  flex flex-col items-center py-5">
      <div className="flex flex-col w-full">
        <p className="font-[600]">{props.label}</p>
        <p className="text-xs text-[#A1A1A1]">{props.sublabel} users</p>
      </div>
      <PieChart width={160} height={160}>
        <Pie
          data={[data_one, data_two]}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
        />
      </PieChart>

      <div className="flex flex-col w-full mt-4 gap-x-2">
        <div className="flex gap-x-2 mb-3 text-xs">
          <div className={`h-[16px] w-[16px] bg-[#32C87D]`}></div>
          <span>{data_one.label}</span>
        </div>

        <div className="flex capitalize gap-x-2 text-xs ">
          <div className={`h-[16px]  capitalize w-[16px] bg-[#DCFFEA]`}></div>
          <div>{data_two.label}</div>
        </div>
      </div>
    </div>
  );
}
