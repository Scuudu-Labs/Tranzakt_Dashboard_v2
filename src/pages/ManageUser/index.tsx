import { useState, useRef, useEffect } from 'react';
import MainContainer from '../../components/layout/MainContainer';
import { PiFunnelLight } from 'react-icons/pi';
import ManagerUserTable from '../../components/tables/ManageUserTable';
import FilterModal from '../../components/modal/filter';
import SearchInput from '../../components/Input/searchInput';

export default function ManageUserPage() {
  const [selectedButton, setSelectedButton] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickOutside = (e: MouseEvent) => {
    if (filterRef.current?.contains(e.target as Node)) return;
    setShowFilter(false);
  };

  useEffect(() => {
    window.addEventListener('mousedown', clickOutside);
    return () => window.removeEventListener('mousedown', clickOutside);
  }, []);

  return (
    <MainContainer>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <div className="bg-white rounded-md text-sm p-1 h-[45px]">
            <button
              className={`rounded-md py-2 px-4 ${
                selectedButton == 0 ? 'bg-[#32C87D] text-white' : ''
              }`}
              onClick={() => {
                setSelectedButton(0);
              }}
            >
              Customer
            </button>
            <button
              className={`rounded-md py-2 px-4 ${
                selectedButton == 1 ? 'bg-[#32C87D] text-white' : ''
              }`}
              onClick={() => {
                setSelectedButton(1);
              }}
            >
              Merchant
            </button>
          </div>
          <SearchInput handleChange={handleChange} value={value} />
          <button
            className="bg-white rounded-md mt-1 flex gap-x-2 px-5   h-[40px] justify-center items-center hover:bg-[#32C87D] hover:text-white"
            onClick={() => setShowFilter(!showFilter)}
          >
            <div className="text-xl">
              <PiFunnelLight />
            </div>
            <span className="pt-1">Filter</span>
          </button>
          {showFilter && <FilterModal reference={filterRef} />}
        </div>
        <ManagerUserTable searchValue={value} />
      </div>
    </MainContainer>
  );
}
