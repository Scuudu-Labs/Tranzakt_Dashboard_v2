import { LegacyRef } from 'react';
import { setSearch } from '../../redux/slice/querySearch';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const FilterModal = ({
  reference,
}: {
  reference: LegacyRef<HTMLDivElement>;
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
      <div className="flex items-center mb-6 cursor-pointer">
        <input
          type="radio"
          onChange={() => setChange('asc')}
          value={search.sort_by}
          checked={search.sort_by === 'asc'}
        />
        <span className="font-montserrat text-[#111111] ml-2">
          Ascending order
        </span>
      </div>
      <div className="flex items-center mb-6 cursor-pointer">
        <input
          type="radio"
          onChange={() => setChange('des')}
          value={search.sort_by}
          checked={search.sort_by === 'des'}
        />
        <span className="font-montserrat text-[#111111] ml-2">
          Descending order
        </span>
      </div>
      <div className="flex items-center  cursor-pointer">
        <input
          type="radio"
          onChange={() => setChange('des')}
          value={search.sort_by}
          checked={search.sort_by === 'des'}
        />
        <span className="font-montserrat text-[#111111] ml-2">
          Date registered
        </span>
      </div>
    </div>
  );
};

export default FilterModal;
