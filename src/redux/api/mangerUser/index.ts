import { baseApi } from '../baseApi';
import { tagTypes } from '../baseApi/tagTypes';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<ISuccessResponse<IUser[]>, IUserQuery>({
      query: ({ sort_by, status, search_txt }) => {
        const params = new URLSearchParams();
        if (sort_by) {
          params.append('sort_by', sort_by);
        }
        if (status) {
          params.append('status', status);
        }
        if (search_txt) {
          params.append('search_txt', search_txt);
        }
        return {
          url: `/users/?${params.toString()}`,
          method: 'GET',
        };
      },
      providesTags: (_result, _err, query) => [{ type: tagTypes.User, query }],
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
