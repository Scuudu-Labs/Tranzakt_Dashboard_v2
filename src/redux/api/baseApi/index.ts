import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';
import { tagTypes } from './tagTypes';

export const baseApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.tranzakt.app/api/v1',
    baseHeaders: {
      'Content-Type': 'application/json',
    },
  }),
  tagTypes: Object.values(tagTypes),

  endpoints: () => ({}),
});
