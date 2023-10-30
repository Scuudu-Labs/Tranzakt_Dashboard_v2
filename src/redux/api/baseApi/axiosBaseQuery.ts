/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, {
  AxiosRequestConfig,
  AxiosError,
  Method,
  AxiosRequestHeaders,
} from 'axios';
import { getPreloadedState } from '../../getPreloadedState';

axios.interceptors.request.use(
  async (config) => {
    const access_token = getPreloadedState().auth.access_token ?? '';
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${access_token}`,
    } as AxiosRequestHeaders;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const axiosBaseQuery =
  ({
    baseUrl = '',
    baseHeaders = {},
  }: {
    baseUrl: string;
    baseHeaders?: AxiosRequestConfig['headers'];
  }): BaseQueryFn<
    {
      url: string;
      method: Method;
      data?: AxiosRequestConfig['data'];
      headers?: AxiosRequestConfig['headers'];
    },
    any,
    unknown
  > =>
  async ({ url, method, data, headers = {} }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        headers: { ...baseHeaders, ...headers },
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          error: err.message,
          ...(typeof err.response?.data === 'object' ? err.response.data : {}),
        },
      };
    }
  };
