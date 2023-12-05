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
    getAUser: builder.query<ISuccessResponse<IUser>, string>({
      query: (id) => {
        return {
          url: `/admin/users/${id}`,
          method: 'GET',
        };
      },
      providesTags: (_result, _err, query) => [
        { type: tagTypes.User, id: query },
      ],
    }),
    deActivateAUser: builder.mutation<ISuccessResponse<IUser>, string>({
      query: (id) => {
        return {
          url: `/admin/users/${id}/deactivate`,
          method: 'PUT',
        };
      },
      invalidatesTags: (_result, _err, query) => [
        { type: tagTypes.User, id: query },
      ],
    }),
    activateAUser: builder.mutation<ISuccessResponse<IUser>, string>({
      query: (id) => {
        return {
          url: `/admin/users/${id}/activate`,
          method: 'PUT',
        };
      },
      invalidatesTags: (_result, _err, query) => [
        { type: tagTypes.User, id: query },
      ],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetAUserQuery,
  useActivateAUserMutation,
  useDeActivateAUserMutation,
} = userApi;
