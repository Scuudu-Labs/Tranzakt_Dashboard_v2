import { generateQueryString } from '../../../lib/generateQueryKey';
import { baseApi } from '../baseApi';
import { tagTypes } from '../baseApi/tagTypes';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<ISuccessResponse<IUserDetails>, IQueryString>({
      query: (query) => {
        const params = generateQueryString(query);
        return {
          url: `/users/?${params}`,
          method: 'GET',
        };
      },
      providesTags: (_result, _err, query) => [{ type: tagTypes.User, query }],
    }),
    getAUser: builder.query<ISuccessResponse<IUser>, string>({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: 'GET',
        };
      },
      providesTags: (_result, _err, query) => [
        { type: tagTypes.User, id: query },
      ],
    }),
  }),
});

export const { useGetAllUsersQuery, useGetAUserQuery } = userApi;
