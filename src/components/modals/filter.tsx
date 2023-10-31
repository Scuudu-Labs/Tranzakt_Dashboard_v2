import { LegacyRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearch } from '../../redux/slice/querySearch';

const FilterModal = ({
  reference,
}: {
  reference: LegacyRef<HTMLDivElement>;
}) => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.query);
  const setChange = (value: string) => {
    dispatch(setSearch({ ...search, status: value }));
  };
  return (
    <div
      ref={reference}
      className="w-[230px] h-[100px] flex flex-col  absolute z-[30] right-6 top-40 shadow-md justify-center bg-white rounded-[8px] p-[16px]"
    >
      <div className="flex items-center mb-4 cursor-pointer">
        <input
          type="radio"
          onChange={() => setChange('ACTIVE')}
          value={search.status}
          checked={search.status === 'ACTIVE'}
        />
        <span className="font-montserrat text-[#111111] ml-2">Activated</span>
      </div>
      <div className="flex items-center cursor-pointer">
        <input
          type="radio"
          onChange={() => setChange('DEACTIVATED')}
          value={search.status}
          checked={search.status === 'DEACTIVATED'}
        />
        <span className="font-montserrat text-[#111111] ml-2">Deactivated</span>
      </div>
    </div>
  );
};

export default FilterModal;
