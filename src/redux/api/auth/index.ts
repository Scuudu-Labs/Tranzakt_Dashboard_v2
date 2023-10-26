import { BASE_URL } from "../../../config";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        headers: { accept: 'application/json' },
        baseUrl: `${BASE_URL}/admin`
    }),
    endpoints: builder => ({
        adminLogin: builder.mutation<ISuccessResponse<IAdmin>, ILogin>({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            }),
            transformErrorResponse: (
                response: { status: number; data:IErrorResponse },
              ) => {
                return response.data.error;
              }
        }),

        forgotPassword: builder.mutation<ISuccessResponse, Pick<ILogin, 'email'>>({
            query: (data) => ({
                url: '/forgot-password',
                method: 'POST',
                body: data

            }),
            transformErrorResponse: (
                response: { status: number; data:IErrorResponse },
              ) => {
                return response;
              }
        })
       
    })
})

export const { useAdminLoginMutation, useForgotPasswordMutation } = authAPi;