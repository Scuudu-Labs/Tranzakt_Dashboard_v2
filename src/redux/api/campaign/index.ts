import { baseApi } from '../baseApi';

export const campaignApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCampaigns: builder.query<ISuccessResponse<ICampaign[]>, void>({
      query: () => {
        return {
          url: `/campaign`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetAllCampaignsQuery } = campaignApi;
