import AreaChartCard from '../charts/AreaChartCard';
import AmountInfoCard from './InfoCard';
import {
  sampleAreaChartData,
  samplePieChartData,
  samplePieChartData2,
} from '../../data';
import PieChartCard from '../charts/PieChartCard';
import TransactionCard from './transactionCard';
import BarCharts from '../charts/barChart';
import { useGetBalanceQuery } from '../../redux/api/balanceOverview';

type IProp = {
  filterType: string;
};

export default function DashboardSection({ filterType }: IProp) {
  const { data } = useGetBalanceQuery(filterType);
  console.log(data, 'balacne');
  return (
    <div className="w-full flex flex-col my-2">
      <div className="flex items-center">
        <div className="flex mt-6 w-[800px] flex-col gap-y-3 ">
          <div className="flex gap-x-3 w-full">
            <AmountInfoCard
              label="TOTAL BALANCE"
              amount="₦500,964.00"
              change="+15.2%"
            />

            <AmountInfoCard
              label="CUSTOMERS BALANCE"
              amount="₦300,964.00"
              change="+15.2%"
            />

            <AmountInfoCard
              label="MERCHANTS BALANCE"
              amount="₦200,964.00"
              change="+15.2%"
            />
          </div>
          <div>
            <AreaChartCard
              data={sampleAreaChartData}
              label="Transaction Statistics ₦"
            />
          </div>
        </div>
        <div className="ml-8 gap-y-4 mt-6 w-full flex flex-col">
          <AmountInfoCard
            label="TOTAL OUTFLOW"
            amount="₦500,964.00"
            change="+15.2%"
          />
          <AmountInfoCard
            label="TOTAL INFLOW"
            amount="₦500,964.00"
            change="+15.2%"
          />
          <TransactionCard />
        </div>
      </div>
      <div className="flex gap-6 my-6">
        <PieChartCard
          label={'KYC Status'}
          sublabel="500 users"
          data={samplePieChartData}
        />

        <PieChartCard
          label={'KYB Status'}
          sublabel="300 users"
          data={samplePieChartData2}
        />
        <BarCharts />
      </div>
    </div>
  );
}
