import { useState } from 'react';
import IconWrap from '../ui/svgWrapper';
import { plusIcon } from '../../assets';
export default function ContentSection() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="w-full px-4">
      <div className="flex items-center w-full justify-between py-4">
        <h2 className="text-[20px] font-montserrat pb-3 font-semibold">
          Content
        </h2>
        <button
          type="submit"
          className="text-white bg-[#32C87D] w-[210px] gap-x-3 flex items-center justify-center  py-3  mt-2 rounded-md"
          onClick={() => setOpenModal(!openModal)}
        >
          <IconWrap src={plusIcon} />
          Add Content
        </button>
      </div>{' '}
      <div className="flex w-full p-4 h-[600px] bg-white mt-2 rounded-[16px]">
        <div className="flex items-center py-3"></div>
      </div>
    </div>
  );
}
