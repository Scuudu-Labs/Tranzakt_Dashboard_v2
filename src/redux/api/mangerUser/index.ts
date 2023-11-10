import { generateQueryString } from '../../../lib/generateQueryKey';
import { baseApi } from '../baseApi';
import { tagTypes } from '../baseApi/tagTypes';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<ISuccessResponse<IUserDetails>, IQueryString>({
      query: (query) => {
        const params = generateQueryString(query);
        return {
          url: `/admin/users/?${params}`,
          method: 'GET',
        };
      },
      providesTags: (_result, _err, query) => [{ type: tagTypes.User, query }],
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
