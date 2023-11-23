import { useState } from 'react';
import IconWrap from '../ui/svgWrapper';
import { plusIcon } from '../../assets';
import CampaignTable from '../tables/CampaignTable';
import { useGetAllCampaignsQuery } from '../../redux/api/campaign';
import EmptyStateContainer from './emptyState';
export default function CampaignSection() {
  const [openModal, setOpenModal] = useState(false);
  const close = () => setOpenModal(false);
  const open = () => setOpenModal(true);
  const { data: campaigns, isLoading } = useGetAllCampaignsQuery();
  return (
    <div className="w-full px-4">
      {campaigns?.data && campaigns.data.length > 0 ? (
        <>
          <div className="flex items-center w-full justify-between py-4">
            <h2 className="text-[20px] font-montserrat pb-3 font-semibold">
              Campaign Summary
            </h2>
            <button
              type="submit"
              className="text-white bg-[#32C87D] w-[210px] gap-x-3 flex items-center justify-center  py-3  mt-2 rounded-md"
              onClick={() => setOpenModal(true)}
            >
              <IconWrap src={plusIcon} />
              New Campaign
            </button>
          </div>{' '}
          <CampaignTable
            campaigns={campaigns}
            isLoading={isLoading}
            modal={openModal}
            closeCreateModal={close}
          />
        </>
      ) : (
        <EmptyStateContainer open={open} />
      )}
    </div>
  );
}
