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
  }),
});

export const { useGetAllCampaignsQuery, useAddCampaignMutation } = campaignApi;
