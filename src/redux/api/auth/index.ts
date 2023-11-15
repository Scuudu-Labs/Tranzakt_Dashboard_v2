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

    forgotPassword: builder.mutation<
      ISuccessResponse<{ email: string }>,
      Pick<ILogin, 'email'>
    >({
      query: (data) => ({
        url: '/admin/forgot-password',
        method: 'POST',
        data: data,
      }),
    }),

    pinValidation: builder.mutation<
      ISuccessResponse<{ auth_token: string }>,
      IReset
    >({
      query: (data) => ({
        url: '/admin/forgot-password/verify-pin',
        method: 'POST',
        data: data,
      }),
    }),

    resetPassword: builder.mutation<ISuccessResponse, { password: string }>({
      query: (data) => ({
        url: '/admin/reset-password',
        method: 'POST',
        data: data,
      }),
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useForgotPasswordMutation,
  usePinValidationMutation,
  useResetPasswordMutation,
} = authAPi;
