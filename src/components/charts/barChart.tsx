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
  <div className="flex items-end top-0 left-[130px] absolute ">
    <div className="flex items-center mr-4">
      <span className="w-[12px] h-[12px] rounded-[12px] bg-green-500 mr-[2px] "></span>
      <span className="text-[#3F3F3F] text-[12px]">Transaction Fee</span>
    </div>
    <div className="flex items-center mr-4">
      <span className="w-[12px] h-[12px] rounded-[12px] bg-blue-400 mr-[2px]"></span>
      <span className="text-[#3F3F3F] text-[12px]">Withdrawal Fee</span>
    </div>
    <div className="flex items-center">
      <span className="w-[12px] h-[12px] rounded-[12px] bg-green-200 mr-[2px]"></span>
      <span className="text-[#3F3F3F] font-montserrat  text-[12px]">
        Bill payment
      </span>
    </div>
  </div>
);

const BarCharts = () => {
  const data = [
    {
      name: 'Sun',
      'Transaction fee': 0,
      'Bill payment': 0,
      'Withdrawal fee': 0,
    },
    {
      name: 'Mon',
      'Transaction fee': 0,
      'Bill payment': 0,
      'Withdrawal fee': 0,
    },
    {
      name: 'Tues',
      'Transaction fee': 0,
      'Withdrawal fee': 0,
      'Bill payment': 0,
    },
    {
      name: 'Wed',
      'Transaction fee': 0,
      'Bill payment': 0,
      'Withdrawal fee': 0,
    },
    {
      name: 'Thurs',
      'Transaction fee': 0,
      'Bill payment': 0,
      'Withdrawal fee': 0,
    },
    {
      name: 'Fri',
      'Transaction fee': 0,
      'Bill payment': 0,
      'Withdrawal fee': 0,
    },
    {
      name: 'Sat',
      'Transaction fee': 0,
      'Withdrawal fee': 0,
      'Bill payment': 0,
    },
  ];
  return (
    <div className="bg-white  flex flex-col  w-full  rounded-[16px] py-4 ">
      <div className="px-4 mb-4">
        <p className="text-[#A1A1A1] font-montserrat text-[12px] tracking-[0.3px] font-[500]">
          TOTAL FEES
        </p>
        <h2 className="font-montserrat font-semibold tex-[18px] tracking-[0.5px] ">
          ₦0
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
            wrapperStyle={{ top: -60, color: '#000' }}
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
