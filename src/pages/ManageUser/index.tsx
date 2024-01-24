import { useState } from 'react';
import MainContainer from '../../components/layout/MainContainer';
import ManagerUserTable from '../../components/tables/ManageUserTable';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearch } from '../../redux/slice/querySearch';

enum UserType {
  USER = 'USER',
  BUSINESS = 'BUSINESS',
}

export default function ManageUserPage() {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.query);
  const setChange = (value: string) => {
    dispatch(setSearch({ ...search, role: value }));
  };
  return (
    <MainContainer>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <div className="rounded-t-md text-sm p-1 h-[45px]">
            <button
              className={`rounded-t-md py-2 mr-2 px-4 ${
                search.role === UserType.USER
                  ? 'bg-white border-t border-gray-300'
                  : 'bg-[#F2F2F2]'
              }`}
              onClick={() => {
                setChange(UserType.USER);
              }}
            >
              Customer
            </button>
            <button
              className={`rounded-t-md py-2 px-4 ${
                search.role === UserType.BUSINESS
                  ? 'bg-white border-t border-gray-300'
                  : 'bg-[#F2F2F2]'
              }`}
              onClick={() => {
                setChange(UserType.BUSINESS);
              }}
            >
              Merchant
            </button>
          </div>
        </div>
        <ManagerUserTable onChange={handleChange} searchValue={value} />
      </div>
    </MainContainer>
  );
}
