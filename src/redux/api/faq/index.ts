import { baseApi } from '../baseApi';
import { tagTypes } from '../baseApi/tagTypes';

export const faqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFaq: builder.mutation<ISuccessResponse<IFAQResponse>, IFAQ>({
      query: (data) => ({
        url: '/faqs',
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [{ type: tagTypes.Faqs }],
    }),
    getAllFaq: builder.query<ISuccessResponse<IFAQResponse[]>, void>({
      query: () => ({
        url: '/faqs',
        method: 'GET',
      }),
      providesTags: [{ type: tagTypes.Faqs }],
    }),
    getOneFaq: builder.query<ISuccessResponse<IFAQResponse>, string>({
      query: (id) => ({
        url: `/faqs/${id}`,
        method: 'GET',
      }),
      providesTags: (_result, _err, id) => [{ type: tagTypes.Faqs, id }],
    }),

    editFaq: builder.mutation<
      ISuccessResponse<IFAQResponse>,
      { id: string; data: IFAQ }
    >({
      query: (data) => ({
        url: `/faqs/${data.id}`,
        method: 'PUT',
        data: data.data,
      }),
      invalidatesTags: [{ type: tagTypes.Faqs }],
    }),
    deleteFaq: builder.mutation<string, string>({
      query: (id) => ({
        url: `/faqs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: tagTypes.Faqs }],
    }),
  }),
});

export const {
  useGetAllFaqQuery,
  useGetOneFaqQuery,
  useCreateFaqMutation,
  useEditFaqMutation,
  useDeleteFaqMutation,
} = faqApi;
