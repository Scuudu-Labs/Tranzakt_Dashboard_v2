import { useEffect, useRef, useState } from 'react';
import { DateIcon, DropIcon } from '../../assets';
import DashboardSection from '../../components/dashboard/DashboardSection';
import MainContainer from '../../components/layout/MainContainer';
import IconWrap from '../../components/ui/svgWrapper';
import DateFilterModal from '../../components/modal/filterByDate';
import { formatText } from '../../lib/text_formater';

export default function DashboardPage() {
  const [showModal, setShowModal] = useState(false);
  const [filterType, setFilterType] = useState('today');
  const filterRef = useRef<HTMLDivElement>(null);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);
  const clickOutside = (e: MouseEvent) => {
    if (filterRef.current?.contains(e.target as Node)) return;
    setShowModal(false);
  };

  useEffect(() => {
    window.addEventListener('mousedown', clickOutside);
    return () => window.removeEventListener('mousedown', clickOutside);
  }, []);
  return (
    <MainContainer>
      {showModal && (
        <DateFilterModal
          close={close}
          reference={filterRef}
          setType={setFilterType}
          type={filterType}
        />
      )}
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-bold font-montserrat text-[#A1A1A1] ">
          Quick Overview
        </h2>
        <button
          className="bg-white rounded-[8px] flex gap-x-2 px-5 h-[44px]  justify-center py-2 min-w-[160px] items-center border-2 border-[#EAEAEA]"
          onClick={open}
        >
          <div className="text-xl">
            <IconWrap src={DateIcon} />
          </div>
          <div className="capitalize px-1">{formatText(filterType)}</div>
          <IconWrap src={DropIcon} />
        </button>
      </div>
      <DashboardSection filterType={filterType} />
    </MainContainer>
  );
}
