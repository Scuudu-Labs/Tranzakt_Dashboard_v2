import { generateQueryString } from '../../../lib/generateQueryKey';
import { amountFormatter } from '../../../lib/text_formater';
import { baseApi } from '../baseApi';
import { tagTypes } from '../baseApi/tagTypes';

export const balanceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBalance: builder.query<ISuccessResponse<IBalanceOverView>, IQueryString>(
      {
        query: (query) => {
          const params = generateQueryString(query);

          return {
            url: `/admin/users-balances?${params}`,
            method: 'GET',
          };
        },
        providesTags: (_result, _err, query) => [
          { type: tagTypes.Balance, query },
        ],
      }
    ),
    getStatistics: builder.query<ISuccessResponse<IStats>, void>({
      query: () => {
        return {
          url: '/admin/ky-users-statistics',
          method: 'GET',
        };
      },
      providesTags: [{ type: tagTypes.Stats }],
    }),
    getGraphData: builder.query<IFormatData[], IQueryString>({
      query: (query) => {
        const params = generateQueryString(query);
        return {
          url: `/admin/transaction-statistics/?${params}`,
          method: 'GET',
        };
      },
      transformResponse: (response: ISuccessResponse<IGraphData[]>) => {
        const formatedData = response?.data?.map((data) => {
          return {
            label: data.legend,
            amount: amountFormatter(data.total_amount),
            valueLabel: 'amount',
          };
        });
        return formatedData as IFormatData[];
      },
      providesTags: (_result, _err, query) => [
        { type: tagTypes.GraphData, query },
      ],
    }),
    getTransactionFlows: builder.query<
      ISuccessResponse<ITxFlows>,
      IQueryString
    >({
      query: (query) => {
        const params = generateQueryString(query);
        return {
          url: `/admin/transaction-flows/?${params}`,
          method: 'GET',
        };
      },
      providesTags: (_result, _err, query) => [
        { type: tagTypes.TXFlows, query },
      ],
    }),
    getBarChatData: builder.query<ISuccessResponse<IBarChart[]>, IQueryString>({
      query: (query) => {
        const params = generateQueryString(query);

        return {
          url: `/admin/fee-statistics?${params}`,
          method: 'GET',
        };
      },
      providesTags: (_result, _err, query) => [
        { type: tagTypes.BarChat, query },
      ],
    }),
  }),
});

export const {
  useGetBalanceQuery,
  useGetStatisticsQuery,
  useGetGraphDataQuery,
  useGetTransactionFlowsQuery,
  useGetBarChatDataQuery,
} = balanceApi;
