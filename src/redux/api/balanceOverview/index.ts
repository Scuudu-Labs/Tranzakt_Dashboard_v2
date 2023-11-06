import { baseApi } from '../baseApi';
import { tagTypes } from '../baseApi/tagTypes';

export const balanceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBalance: builder.query<ISuccessResponse<IBalanceOverView>, string>({
      query: (query) => {
        return {
          url: `/users-balances?period=${query}`,
          method: 'GET',
        };
      },
      providesTags: (_result, _err, query) => [
        { type: tagTypes.Balance, query },
      ],
    }),
  }),
});

export const { useGetBalanceQuery } = balanceApi;
