import { baseApi } from '../baseApi';

export const authAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation<ISuccessResponse<IAdmin>, ILogin>({
      query: (data) => ({
        url: '/admin/login',
        method: 'POST',
        data: data,
      }),
    }),

    forgotPassword: builder.mutation<ISuccessResponse, Pick<ILogin, 'email'>>({
      query: (data) => ({
        url: '/admin/forgot-password',
        method: 'POST',
        data: data,
      }),
    }),
  }),
});

export const { useAdminLoginMutation, useForgotPasswordMutation } = authAPi;
