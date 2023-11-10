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
  }),
});

export const { useGetBalanceQuery, useGetStatisticsQuery } = balanceApi;
