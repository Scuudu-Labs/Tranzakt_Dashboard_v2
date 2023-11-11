import { generateQueryString } from '../../../lib/generateQueryKey';
import { baseApi } from '../baseApi';
import { tagTypes } from '../baseApi/tagTypes';

export const balanceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBalance: builder.query<ISuccessResponse<IBalanceOverView>, string>({
      query: (query) => {
        return {
          url: `/admin/users-balances?period=${query}`,
          method: 'GET',
        };
      },
      providesTags: (_result, _err, query) => [
        { type: tagTypes.Balance, query },
      ],
    }),
    getStatistics: builder.query<ISuccessResponse<IStats[]>, void>({
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
          url: `/transaction-statistics/?${params}`,
          method: 'GET',
        };
      },
      transformResponse: (response: ISuccessResponse<IGraphData[]>) => {
        const formatedData = response?.data?.map((data) => {
          return {
            label: data.legend,
            amount: data.total_amount,
            valueLabel: 'amount',
          };
        });
        return formatedData as IFormatData[];
      },
      providesTags: (_result, _err, query) => [
        { type: tagTypes.GraphData, query },
      ],
    }),
  }),
});

export const {
  useGetBalanceQuery,
  useGetStatisticsQuery,
  useGetGraphDataQuery,
} = balanceApi;
