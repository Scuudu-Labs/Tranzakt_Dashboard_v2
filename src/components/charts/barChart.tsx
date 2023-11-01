import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const ContentLegend = () => (
  <div className="flex items-end top-0 absolute ">
    <div className="flex items-center mr-9">
      <span className="w-[15px] h-[15px] rounded-[15px] bg-green-500 mr-1 "></span>
      <span className="text-[#3F3F3F] text-[13px]">Transaction Fee</span>
    </div>
    <div className="flex items-center mr-9">
      <span className="w-[15px] h-[15px] rounded-[15px] bg-blue-400 mr-1"></span>
      <span className="text-[#3F3F3F] text-[13px]">Withdrawal Fee</span>
    </div>
    <div className="flex items-center">
      <span className="w-[15px] h-[15px] rounded-[15px] bg-green-200 mr-1"></span>
      <span className="text-[#3F3F3F] font-montserrat  text-[13px]">
        Bill payment
      </span>
    </div>
  </div>
);

const BarCharts = () => {
  const data = [
    {
      name: 'Sun',
      'Transaction fee': 4000,
      'Bill payment': 2400,
      'Withdrawal fee': 400,
    },
    {
      name: 'Mon',
      'Transaction fee': 3000,
      'Bill payment': 1398,
      'Withdrawal fee': 400,
    },
    {
      name: 'Tues',
      'Transaction fee': 2000,
      'Withdrawal fee': 400,
      'Bill payment': 9800,
    },
    {
      name: 'Wed',
      'Transaction fee': 2780,
      'Bill payment': 3908,
      'Withdrawal fee': 400,
    },
    {
      name: 'Thurs',
      'Transaction fee': 1890,
      'Bill payment': 4800,
      'Withdrawal fee': 400,
    },
    {
      name: 'Fri',
      'Transaction fee': 2390,
      'Bill payment': 3800,
      'Withdrawal fee': 400,
    },
    {
      name: 'Sat',
      'Transaction fee': 3490,
      'Withdrawal fee': 400,
      'Bill payment': 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="bg-white  flex flex-col  w-full  rounded-[16px] py-4 ">
      <div className="px-4 mb-4">
        <p className="text-[#A1A1A1] font-montserrat text-[12px] tracking-[0.3px] font-[500]">
          TOTAL FEES
        </p>
        <h2 className="font-montserrat font-semibold tex-[18px] tracking-[0.5px] ">
          ₦12,345.00
        </h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={800}
          height={900}
          data={data}
          margin={{
            right: 16,
            left: 16,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            iconType="circle"
            wrapperStyle={{ top: -60, left: 200, color: '#000' }}
            content={<ContentLegend />}
          />
          <Bar dataKey="Transaction fee" fill="#32C87D" />
          <Bar dataKey="Withdrawal fee" fill="#268EE9" />
          <Bar dataKey="Bill payment" fill="#B7FFD5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
