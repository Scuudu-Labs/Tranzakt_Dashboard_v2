import { LegacyRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearch } from '../../redux/slice/querySearch';

const FilterModal = ({
  reference,
  close,
}: {
  reference: LegacyRef<HTMLDivElement>;
  close: () => void;
}) => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.query);
  const setChange = (value: string | null) => {
    dispatch(setSearch({ ...search, status: value }));
    close();
  };

  return (
    <div
      ref={reference}
      className="w-[230px] h-[170px] flex flex-col  absolute z-[30] right-6 top-[304px] shadow-md justify-center bg-white rounded-[8px] p-[16px]"
    >
      <div className="flex items-center mb-4  cursor-pointer">
        <input
          type="radio"
          onChange={() => {
            setChange(null);
          }}
          value={search.status}
          checked={search.status === null}
          className="w-4 h-4 text-green-600 accent-green-600 focus:outline-none  dark:bg-gray-600 dark:border-gray-500"
        />
        <span className="font-montserrat text-[#111111] ml-2">All</span>
      </div>
      <div className="flex items-center mb-4 cursor-pointer">
        <input
          type="radio"
          onChange={() => {
            setChange('ACTIVE');
          }}
          checked={search.status === 'ACTIVE'}
          value={search.status}
          className="w-4 h-4 text-green-600  accent-green-600 focus:outline-none  dark:bg-gray-600 dark:border-gray-500"
        />
        <span className="font-montserrat text-[#111111] ml-2">Activated</span>
      </div>
      <div className="flex items-center mb-4 cursor-pointer">
        <input
          type="radio"
          onChange={() => {
            setChange('DEACTIVATED');
          }}
          value={search.status}
          checked={search.status === 'DEACTIVATED'}
          className="w-4 h-4 text-green-600 accent-green-600 focus:outline-none  dark:bg-gray-600 dark:border-gray-500"
        />
        <span className="font-montserrat text-[#111111] ml-2">Deactivated</span>
      </div>
      <div className="flex items-center  cursor-pointer">
        <input
          type="radio"
          onChange={() => {
            setChange('DELETED');
            close();
          }}
          value={search.status}
          checked={search.status === 'DELETED'}
          className="w-4 h-4 text-green-600 accent-green-600 focus:outline-none  dark:bg-gray-600 dark:border-gray-500"
        />
        <span className="font-montserrat text-[#111111] ml-2">Deleted</span>
      </div>
    </div>
  );
};

export default FilterModal;
