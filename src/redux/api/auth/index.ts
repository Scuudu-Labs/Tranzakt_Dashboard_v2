import { BASE_URL } from "../../../config";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        headers: { accept: 'application/json' },
        baseUrl: `${BASE_URL}/admin/login`
    }),
    endpoints: builder => ({
        adminLogin: builder.mutation<ISuccessResponse<IAdmin>, ILogin>({
            query: (data) => ({
                url: '/',
                method: 'POST',
                body: data
            }),
            transformErrorResponse: (
                response: { status: number; data:IErrorResponse },
              ) => {
                return response.data.error;
              }
        }),
       
    })
})

export const { useAdminLoginMutation } = authAPi;