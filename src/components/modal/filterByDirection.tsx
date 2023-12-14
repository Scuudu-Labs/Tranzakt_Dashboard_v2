import { LegacyRef } from 'react';
import { setSearch } from '../../redux/slice/querySearch';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const FilterModal = ({
  reference,
  close,
}: {
  reference: LegacyRef<HTMLDivElement>;
  close: () => void;
}) => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.query);
  const setChange = (value: string) => {
    dispatch(setSearch({ ...search, sort_by: value }));
  };
  return (
    <div
      ref={reference}
      className="w-[230px] h-[188px] flex flex-col  absolute z-[30] right-6 top-40 shadow-md justify-center bg-white rounded-[8px] p-[16px]"
    >
      <div className="flex items-center mb-4 cursor-pointer">
        <input
          type="radio"
          onChange={() => {
            setChange('name_asc');
            close();
          }}
          value={search.sort_by}
          checked={search.sort_by === 'name_asc'}
          className="w-4 h-4 text-green-600  accent-green-600 focus:outline-none  dark:bg-gray-600 dark:border-gray-500"
        />
        <span className="font-montserrat text-[#111111] ml-2">
          Asc. order by name
        </span>
      </div>
      <div className="flex items-center mb-4 cursor-pointer">
        <input
          type="radio"
          onChange={() => {
            setChange('name_des');
            close();
          }}
          value={search.sort_by}
          checked={search.sort_by === 'name_des'}
          className="w-4 h-4 text-green-600 accent-green-600 focus:outline-none  dark:bg-gray-600 dark:border-gray-500"
        />
        <span className="font-montserrat text-[#111111] ml-2">
          Desc. order by Name
        </span>
      </div>
      <div className="flex mb-4  items-center  cursor-pointer">
        <input
          type="radio"
          onChange={() => {
            setChange('newest');
            close();
          }}
          value={search.sort_by}
          checked={search.sort_by === 'newest'}
          className="w-4 h-4 text-green-600 accent-green-600 focus:outline-none  dark:bg-gray-600 dark:border-gray-500"
        />
        <span className="font-montserrat text-[#111111] ml-2">
          Asc. order by date
        </span>
      </div>
      <div className="flex items-center  cursor-pointer">
        <input
          type="radio"
          onChange={() => {
            setChange('oldest');
            close();
          }}
          value={search.sort_by}
          checked={search.sort_by === 'oldest'}
          className="w-4 h-4 text-green-600  focus:outline-none accent-green-600  dark:bg-gray-600 dark:border-gray-500"
        />
        <span className="font-montserrat text-[#111111] ml-2">
          Desc. order by date
        </span>
      </div>
    </div>
  );
};

export default FilterModal;
