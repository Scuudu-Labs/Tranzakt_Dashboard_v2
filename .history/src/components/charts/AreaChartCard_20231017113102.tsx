import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";

interface AreaData {
  label: string;
  valueLabel: string;
}

export default function AreaChartCard(props: {
  data: AreaData[];
  label: string;
}) {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-full px-5 rounded-md py-6 ">
      <div className="flex w-full pt-2 pb-10">
        <p className="font-semibold">{props.label}</p>
      </div>
      <AreaChart
        style={{ fontSize: "12px" }}
        width={800}
        height={250}
        data={props.data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={props.data[0].valueLabel}
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
}
