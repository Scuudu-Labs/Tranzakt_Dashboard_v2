import AreaChartCard from '../charts/AreaChartCard';
import AmountInfoCard from './InfoCard';
import PieChartCard from '../charts/PieChartCard';
import TransactionCard from './transactionCard';
import BarCharts from '../charts/barChart';
import {
  useGetBalanceQuery,
  useGetGraphDataQuery,
  useGetStatisticsQuery,
  useGetTransactionFlowsQuery,
} from '../../redux/api/balanceOverview';
import { useMemo } from 'react';
import { amountFormatter, currencyFormatter } from '../../lib/text_formater';

type IProp = {
  filterType: string;
};

enum Direction {
  UP = 'up',
  DOWN = 'down',
}

export default function DashboardSection({ filterType }: IProp) {
  const { data, isLoading } = useGetBalanceQuery(filterType);
  const { data: graphData, isLoading: fetching } = useGetGraphDataQuery({
    period: filterType,
  });
  const { data: txflows, isLoading: getting } =
    useGetTransactionFlowsQuery(filterType);
  const { data: stats, isLoading: loading } = useGetStatisticsQuery();
  const statsData = useMemo(() => {
    return {
      kyb: {
        percentCompleted: stats?.data?.business?.percentageCompletedKYB,
        percentPending: stats?.data?.business?.percentagePendingKYB,
        completed: stats?.data?.business?.totalCompletedKYB,
        pending: stats?.data?.business?.totalPendingKYB,
      },
      kyc: {
        percentCompleted: stats?.data?.customer?.percentageCompletedKYC,
        percentPending: stats?.data?.customer?.percentagePendingKYC,
        completed: stats?.data?.customer?.totalCompletedKYC,
        pending: stats?.data?.customer?.totalPendingKYC,
      },
    };
  }, [stats?.data]);
  return (
    <div className="w-full flex flex-col my-2">
      <div className="flex items-center">
        <div className="flex mt-6 w-[900px] flex-col gap-y-3 ">
          <div className="flex gap-x-3 w-full">
            <AmountInfoCard
              label="TOTAL BALANCE"
              amount={currencyFormatter(
                amountFormatter(data?.data?.users?.balance ?? 0)
              )}
              loading={isLoading}
              change={data?.data?.users?.balance_percentage_change ?? 0}
              isReduction={
                data?.data?.users?.balance_percentage_change_direction ===
                Direction.DOWN
              }
              filterType={filterType}
            />

            <AmountInfoCard
              label="CUSTOMERS BALANCE"
              loading={isLoading}
              change={data?.data?.customers?.balance_percentage_change ?? 0}
              amount={currencyFormatter(
                amountFormatter(data?.data?.customers?.balance ?? 0)
              )}
              filterType={filterType}
              isReduction={
                data?.data?.customers?.balance_percentage_change_direction ===
                Direction.DOWN
              }
            />

            <AmountInfoCard
              label="MERCHANTS BALANCE"
              loading={isLoading}
              amount={currencyFormatter(
                amountFormatter(data?.data?.businesses?.balance ?? 0)
              )}
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
            loading={getting}
            amount={currencyFormatter(
              amountFormatter(
                txflows?.data?.total_in_and_out_flows?.out_flow?.total_amount ??
                  0
              )
            )}
            isReduction={
              txflows?.data?.total_in_and_out_flows?.out_flow
                ?.percentage_change_direction === Direction.DOWN
            }
            filterType={filterType}
            change={
              txflows?.data?.total_in_and_out_flows?.out_flow
                ?.percentage_change ?? 0
            }
          />
          <AmountInfoCard
            label="TOTAL INFLOW"
            loading={getting}
            amount={currencyFormatter(
              amountFormatter(
                txflows?.data?.total_in_and_out_flows?.in_flow?.total_amount ??
                  0
              )
            )}
            isReduction={
              txflows?.data?.total_in_and_out_flows?.in_flow
                ?.percentage_change_direction === Direction.DOWN
            }
            filterType={filterType}
            change={
              txflows?.data?.total_in_and_out_flows?.in_flow
                ?.percentage_change ?? 0
            }
          />
          <TransactionCard
            loading={getting}
            txFlows={txflows?.data?.internal_and_external_flows as IFlow}
          />
        </div>
      </div>
      <div className="flex gap-6 my-6">
        <PieChartCard
          loading={loading}
          label={'KYC Status'}
          sublabel={(stats?.data && stats?.data?.customer?.totalUsers) ?? 0}
          type="KYC"
          data={{
            percentCompleted: statsData.kyc.percentCompleted ?? 0,
            percentPending: statsData.kyc.percentPending ?? 0,
            completed: statsData.kyc.completed ?? 0,
            pending: statsData.kyc.pending ?? 0,
          }}
        />

        <PieChartCard
          loading={loading}
          label={'KYB Status'}
          sublabel={(stats?.data && stats?.data?.business?.totalUsers) ?? 0}
          type="KYB"
          data={{
            percentCompleted: statsData.kyb.percentCompleted ?? 0,
            percentPending: statsData.kyb.percentPending ?? 0,
            completed: statsData.kyb.completed ?? 0,
            pending: statsData.kyb.pending ?? 0,
          }}
        />
        <BarCharts />
      </div>
    </div>
  );
}
