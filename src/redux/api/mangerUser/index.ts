import { baseApi } from '../baseApi';
import { tagTypes } from '../baseApi/tagTypes';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<ISuccessResponse<IUser[]>, IUserQuery>({
      query: (query) => ({
        url: `/users/?sort_by=${query.sort_by}&status=${query.status}&search_txt=${query.search_txt}`,
        method: 'GET',
      }),
      providesTags: (_result, _err, query) => [{ type: tagTypes.User, query }],
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
