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
import ButtonLoader from '../button/buttonLoader';

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

const BarCharts = ({ query }: { query: IQueryString }) => {
  const { data: chartData, isLoading } = useGetBarChatDataQuery(query);
  const barData = useMemo(() => {
    const value = chartData?.data?.reduce((acc, item) => {
      const sum =
        item.bill_payment + item.transaction_fee + item.withdrawal_fee;
      return (acc += sum);
    }, 0);
    return value;
  }, [chartData?.data]);

  return (
    <div className="bg-white  flex flex-col  w-full  rounded-[16px] py-4 ">
      <div className="px-4 mb-4">
        <p className="text-[#A1A1A1] font-montserrat text-[12px] tracking-[0.3px] font-[500]">
          TOTAL FEES
        </p>
        <h2 className="font-montserrat font-semibold tex-[18px] tracking-[0.5px] ">
          ₦{barData}
        </h2>
      </div>
      {isLoading ? (
        <div className="h-[200px] flex items-center justify-center w-[800px]">
          <ButtonLoader />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={850}
            height={900}
            data={chartData?.data as IBarChart[]}
            margin={{
              right: 16,
              left: 16,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="legend" />
            <YAxis />
            <Tooltip />
            <Legend
              iconType="circle"
              wrapperStyle={{ top: -60, color: '#000' }}
              content={<ContentLegend />}
            />
            <Bar dataKey="transaction_fee" fill="#32C87D" />
            <Bar dataKey="withdrawal_fee" fill="#268EE9" />
            <Bar dataKey="bill_payment" fill="#B7FFD5" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default BarCharts;
