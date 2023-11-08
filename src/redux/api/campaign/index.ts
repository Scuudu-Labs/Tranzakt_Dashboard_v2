import { baseApi } from '../baseApi';
import { tagTypes } from '../baseApi/tagTypes';

export const campaignApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCampaigns: builder.query<ISuccessResponse<ICampaign[]>, void>({
      query: () => {
        return {
          url: `/campaign`,
          method: 'GET',
        };
      },
      providesTags: [tagTypes.Campaign],
    }),
  }),
});

export const { useGetAllCampaignsQuery } = campaignApi;
