import { BASE_URL } from "../../../config";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        headers: { accept: 'application/json' },
        baseUrl: `${BASE_URL}/admin`
    }),
    endpoints: builder => ({
        adminLogin: builder.mutation<ISuccessResponse<ILoginResponse>, ILogin>({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            }),
        })
    })
})

export const { useAdminLoginMutation } = authAPi;