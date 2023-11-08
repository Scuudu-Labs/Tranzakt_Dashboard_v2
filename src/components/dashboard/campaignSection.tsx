import { useState } from 'react';
import CampaignCard from '../modal/campaignCard';
import IconWrap from '../ui/svgWrapper';
import { plusIcon } from '../../assets';
import ModalWraper from '../modal';
import CampaignTable from '../tables/CampaignTable';
export default function CampaignSection() {
  const [openModal, setOpenModal] = useState(false);
  const close = () => setOpenModal(false);
  return (
    <div className="w-full px-4">
      <div className="flex items-center w-full justify-between py-4">
        <h2 className="text-[20px] font-montserrat pb-3 font-semibold">
          Campaign Summary
        </h2>
        <button
          type="submit"
          className="text-white bg-[#32C87D] w-[210px] gap-x-3 flex items-center justify-center  py-3  mt-2 rounded-md"
          onClick={() => setOpenModal(!openModal)}
        >
          <IconWrap src={plusIcon} />
          New Campaign
        </button>
      </div>{' '}
      {openModal && (
        <ModalWraper close={close} show={openModal}>
          <CampaignCard close={close} />
        </ModalWraper>
      )}{' '}
      <CampaignTable />
    </div>
  );
}
