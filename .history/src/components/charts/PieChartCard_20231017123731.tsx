import { PieChart, Pie } from "recharts";
import { RadialBarChart, RadialBar } from "recharts";

interface PieChartData {
  label: string;
  value: number;
  fill: string;
}

export default function PieChartCard(props: {
  data: PieChartData[];
  label: string;
  sublabel?: string;
}) {
  return (
    <div className="w-[266px] rounded-[16px] px-[12px] min-h-[300px] bg-white  flex flex-col items-center justify-center">
      <div className="flex flex-col w-full">
        <p>{props.label}</p>
        <p className="text-xs text-[#2B2B2B]">{props.sublabel}</p>
      </div>
      <PieChart width={200} height={180}>
        <Pie
          data={props.data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
        />
      </PieChart>

      <div className="flex flex-col w-full gap-x-2 items-center">
        <div className="flex gap-x-2 text-xs">
          <div className={`h-[16px] w-[16px] bg-[#32C87D]`}></div>
          <div>{props.data[0].label}</div>
        </div>

        <div className="flex gap-x-2 text-xs ">
          <div className={`h-[16px] w-[16px] bg-[#DCFFEA]`}></div>
          <div>{props.data[1].label}</div>
        </div>
      </div>
    </div>
  );
}
