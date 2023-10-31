import { useState, useRef, useEffect } from 'react';
import MainContainer from '../../components/layout/MainContainer';
import { PiFunnelLight } from 'react-icons/pi';
import ManagerUserTable from '../../components/tables/ManageUserTable';
import { SearchIcon } from '../../assets';
import IconWrap from '../../components/ui/svgWrapper';
import FilterModal from '../../components/modals/filter';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearch } from '../../redux/slice/querySearch';

export default function ManageUserPage() {
  const [selectedButton, setSelectedButton] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const { search } = useAppSelector((state) => state.query);
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clickOutside = (e: any) => {
    if (filterRef.current?.contains(e.target)) return;
    setShowFilter(false);
  };

  useEffect(() => {
    window.addEventListener('mousedown', clickOutside);
    return () => window.removeEventListener('mousedown', clickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch({ ...search, search_txt: e.target.value }));
  };

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
          <div className="w-[600px] h-[48px] flex items-center relative  ">
            <input
              type="text"
              name="search"
              onChange={handleChange}
              className="h-[48px] text-[#3F3F3F] font-montserrat focus:outline-none rounded-[8px] rounded-r-none w-[90%] px-[16px]"
              placeholder="Search"
            />
            <div className="border bg-white border-[#EAEAEA]  rounded-[8px]  rounded-l-none   flex items-center justify-center w-[10%] h-[48px]">
              <IconWrap src={SearchIcon} />
            </div>
          </div>
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
        <ManagerUserTable />
      </div>
    </MainContainer>
  );
}
