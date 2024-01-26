import { LegacyRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearch } from '../../redux/slice/querySearch';

const FilterAccountModal = ({
  reference,
  close,
}: {
  reference: LegacyRef<HTMLDivElement>;
  close: () => void;
}) => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.query);
  const setChange = (value: boolean | null) => {
    dispatch(setSearch({ ...search, kyc_or_kyb_status: value }));
    close();
  };
  return (
    <div
      ref={reference}
      className="w-[230px] h-[130px]  flex-col  absolute z-[30] left-[60%] top-[304px] shadow-md justify-center bg-white rounded-[8px] p-[16px]"
    >
      <div className="flex items-center mb-4 cursor-pointer">
        <input
          type="radio"
          onChange={() => {
            setChange(null);
          }}
          checked={search.kyc_or_kyb_status === null}
          value={search.kyc_or_kyb_status}
          className="w-4 h-4 text-green-600  accent-green-600 focus:outline-none  dark:bg-gray-600 dark:border-gray-500"
        />
        <span className="font-montserrat text-[#111111] ml-2">All</span>
      </div>
      <div className="flex items-center mb-4 cursor-pointer">
        <input
          type="radio"
          onChange={() => {
            setChange(false);
          }}
          checked={search.kyc_or_kyb_status === false}
          value={search.kyc_or_kyb_status}
          className="w-4 h-4 text-green-600  accent-green-600 focus:outline-none  dark:bg-gray-600 dark:border-gray-500"
        />
        <span className="font-montserrat text-[#111111] ml-2">Pending</span>
      </div>
      <div className="flex items-center  cursor-pointer">
        <input
          type="radio"
          onChange={() => {
            setChange(true);
          }}
          value={search.kyc_or_kyb_status}
          checked={search.kyc_or_kyb_status === true}
          className="w-4 h-4 text-green-600 accent-green-600 focus:outline-none  dark:bg-gray-600 dark:border-gray-500"
        />
        <span className="font-montserrat text-[#111111] ml-2">Completed</span>
      </div>
    </div>
  );
};

export default FilterAccountModal;
