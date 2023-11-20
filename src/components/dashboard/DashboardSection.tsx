import AreaChartCard from '../charts/AreaChartCard';
import AmountInfoCard from './InfoCard';
import PieChartCard from '../charts/PieChartCard';
import TransactionCard from './transactionCard';
import BarCharts from '../charts/barChart';
import {
  useGetBalanceQuery,
  useGetGraphDataQuery,
  useGetStatisticsQuery,
} from '../../redux/api/balanceOverview';
import { currencyFormatter } from '../../lib/text_formater';

type IProp = {
  filterType: string;
};

enum Direction {
  UP = 'up',
  DOWN = 'down',
}

export default function DashboardSection({ filterType }: IProp) {
  const { data } = useGetBalanceQuery(filterType);
  const { data: graphData, isLoading: fetching } = useGetGraphDataQuery({
    period: filterType,
  });
  const { data: stats, isLoading: loading } = useGetStatisticsQuery();
  return (
    <div className="w-full flex flex-col my-2">
      <div className="flex items-center">
        <div className="flex mt-6 w-[900px] flex-col gap-y-3 ">
          <div className="flex gap-x-3 w-full">
            <AmountInfoCard
              label="TOTAL BALANCE"
              amount={currencyFormatter(data?.data?.users?.balance ?? 0)}
              change={data?.data?.users?.balance_percentage_change ?? 0}
              isReduction={
                data?.data?.users?.balance_percentage_change_direction ===
                Direction.DOWN
              }
              filterType={filterType}
            />

            <AmountInfoCard
              label="CUSTOMERS BALANCE"
              change={data?.data?.customers?.balance_percentage_change ?? 0}
              amount={currencyFormatter(data?.data?.customers?.balance ?? 0)}
              filterType={filterType}
              isReduction={
                data?.data?.customers?.balance_percentage_change_direction ===
                Direction.DOWN
              }
            />

            <AmountInfoCard
              label="MERCHANTS BALANCE"
              amount={currencyFormatter(data?.data?.businesses?.balance ?? 0)}
              change={data?.data?.businesses?.balance_percentage_change ?? 0}
              isReduction={
                data?.data?.businesses?.balance_percentage_change_direction ===
                Direction.DOWN
              }
              filterType={filterType}
            />
          </div>
          <AreaChartCard
            loading={fetching}
            data={graphData as IFormatData[]}
            label="Transaction Statistics ₦"
          />
        </div>
        <div className="ml-6 gap-y-4 mt-6 w-full flex flex-col">
          <AmountInfoCard
            label="TOTAL OUTFLOW"
            amount="₦500,964.00"
            isReduction={
              data?.data?.users?.balance_percentage_change_direction ===
              Direction.DOWN
            }
            filterType={filterType}
            change={
              (data?.data?.businesses?.balance_percentage_change as number) ?? 0
            }
          />
          <AmountInfoCard
            label="TOTAL INFLOW"
            amount="₦500,964.00"
            change={data?.data?.businesses?.balance_percentage_change ?? 0}
            isReduction={
              data?.data?.users?.balance_percentage_change_direction ===
              Direction.DOWN
            }
            filterType={filterType}
          />
          <TransactionCard />
        </div>
      </div>
      <div className="flex gap-6 my-6">
        <PieChartCard
          loading={loading}
          label={'KYC Status'}
          sublabel={(stats?.data && stats?.data?.[0]?.totalUsers) ?? 0}
          type="KYC"
          data={{
            percentCompleted: stats?.data?.[0]?.percentageCompletedKYC ?? 0,
            percentPending: stats?.data?.[0]?.percentagePendingKYC ?? 0,
            completed: stats?.data?.[0]?.totalCompletedKYC ?? 0,
            pending: stats?.data?.[0]?.totalPendingKYC ?? 0,
          }}
        />

        <PieChartCard
          loading={loading}
          label={'KYB Status'}
          sublabel={(stats?.data && stats?.data?.[1]?.totalUsers) ?? 0}
          type="KYB"
          data={{
            percentCompleted: stats?.data?.[1]?.percentageCompletedKYB ?? 0,
            percentPending: stats?.data?.[1]?.percentagePendingKYB ?? 0,
            completed: stats?.data?.[1]?.totalCompletedKYB ?? 0,
            pending: stats?.data?.[1]?.totalPendingKYB ?? 0,
          }}
        />
        <BarCharts />
      </div>
    </div>
  );
}
