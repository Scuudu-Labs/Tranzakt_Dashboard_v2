import { LegacyRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearch } from '../../redux/slice/querySearch';

const DeleteCard = ({
  reference,
  close,
}: {
  reference: LegacyRef<HTMLDivElement>;
  close: () => void;
}) => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.query);
  const setChange = (value: boolean | null) => {
    dispatch(setSearch({ ...search, is_deleted: value }));
  };

  return (
    <div
      ref={reference}
      className="w-[230px] h-[140px] flex flex-col  absolute z-[30] right-6 top-[250px] shadow-md justify-center bg-white rounded-[8px] p-[16px]"
    >
      <div className="flex items-center mb-4 cursor-pointer">
        <input
          type="radio"
          onChange={() => {
            setChange(null);
            close();
          }}
          checked={search.is_deleted === null}
          value={search.is_deleted}
          className="w-4 h-4 text-green-600  accent-green-600 focus:outline-none  dark:bg-gray-600 dark:border-gray-500"
        />
        <span className="font-montserrat text-[#111111] ml-2">All</span>
      </div>
      <div className="flex items-center mb-4 cursor-pointer">
        <input
          type="radio"
          onChange={() => {
            setChange(false);
            close();
          }}
          value={search.is_deleted}
          checked={search.is_deleted === false}
          className="w-4 h-4 text-green-600 accent-green-600 focus:outline-none  dark:bg-gray-600 dark:border-gray-500"
        />
        <span className="font-montserrat text-[#111111] ml-2">False</span>
      </div>

      <div className="flex items-center cursor-pointer">
        <input
          type="radio"
          onChange={() => {
            setChange(true);
            close();
          }}
          value={search.is_deleted}
          checked={search.is_deleted === true}
          className="w-4 h-4 text-green-600 accent-green-600 focus:outline-none  dark:bg-gray-600 dark:border-gray-500"
        />
        <span className="font-montserrat text-[#111111] ml-2">True</span>
      </div>
    </div>
  );
};

export default DeleteCard;
7;
