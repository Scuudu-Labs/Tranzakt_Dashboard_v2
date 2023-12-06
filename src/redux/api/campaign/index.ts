import { baseApi } from '../baseApi';
import { tagTypes } from '../baseApi/tagTypes';

export const campaignApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCampaigns: builder.query<ISuccessResponse<ICampaign[]>, void>({
      query: () => {
        return {
          url: `/admin/campaign`,
          method: 'GET',
        };
      },
      providesTags: [{ type: tagTypes.Campaign }],
    }),

    getOneCampaign: builder.query<ISuccessResponse<ICampaign>, string>({
      query: (id) => {
        return {
          url: `/admin/campaign/${id}`,
          method: 'GET',
        };
      },
      providesTags: (_result, _err, query) => [
        { type: tagTypes.Campaign, query },
      ],
    }),

    addCampaign: builder.mutation<ISuccessResponse<ICampaign[]>, ICampaignForm>(
      {
        query: (data) => {
          return {
            url: `/admin/campaign`,
            method: 'POST',
            data: data,
          };
        },
        invalidatesTags: [{ type: tagTypes.Campaign }],
      }
    ),
    updateCampaign: builder.mutation<
      ISuccessResponse<ICampaign>,
      { id: string; data: ICampaignForm }
    >({
      query: (data) => {
        return {
          url: `/admin/campaign/${data.id}`,
          method: 'PUT',
          data: data.data,
        };
      },
      invalidatesTags: [{ type: tagTypes.Campaign }],
    }),
    deleteCampaign: builder.mutation<ISuccessResponse<ICampaign>, string>({
      query: (id) => {
        return {
          url: `/admin/campaign/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: [{ type: tagTypes.Campaign }],
    }),
  }),
});

export const {
  useGetAllCampaignsQuery,
  useAddCampaignMutation,
  useGetOneCampaignQuery,
  useUpdateCampaignMutation,
  useDeleteCampaignMutation,
} = campaignApi;
