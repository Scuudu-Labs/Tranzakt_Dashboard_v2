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
import { useGetBarChatDataQuery } from '../../redux/api/balanceOverview';
import { useMemo } from 'react';

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

const BarCharts = ({ filterType }: { filterType: string }) => {
  const { data: chartData, isLoading } = useGetBarChatDataQuery(filterType);
  console.log(chartData, isLoading);
  const barData = useMemo(() => {
    if (chartData && chartData.data) {
      const initialObject = chartData?.data;
      console.log(Object.entries(initialObject).flat(2));
      // console.log(initialObject[key])
      // const resultData = Object.values(initialObject).map((item, key) => {
      //   console.log(item, key);
      // });
      // console.log(resultData);

      // const resultArray = Object.keys(initialObject).reduce((acc:any, key:string) => {
      // console.log(initialObject[key], 'keet')
      // const arrayOfObjects = initialObject[key].map((item: IData) => ({ [key]: item }));
      // return acc.concat(arrayOfObjects);
      // }, []);
      return [];
    }
    return [];
  }, [chartData?.data]);

  console.log(barData, 'useMemoe');
  const data = [
    {
      name: 'Sun',
      'Transaction fee': 10,
      'Bill payment': 10,
      'Withdrawal fee': 5,
    },
    {
      name: 'Mon',
      'Transaction fee': 10,
      'Bill payment': 0,
      'Withdrawal fee': 0,
    },
    {
      name: 'Tues',
      'Transaction fee': 0,
      'Bill payment': 0,
      'Withdrawal fee': 4,
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
