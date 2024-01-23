import { useState } from 'react';
import MainContainer from '../../components/layout/MainContainer';
import ManagerUserTable from '../../components/tables/ManageUserTable';

export default function ManageUserPage() {
  const [selectedButton, setSelectedButton] = useState(0);
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <MainContainer>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <div className="rounded-t-md text-sm p-1 h-[45px]">
            <button
              className={`rounded-t-md py-2 mr-2 px-4 ${
                selectedButton == 0
                  ? 'bg-white border-t border-gray-300'
                  : 'bg-[#F2F2F2]'
              }`}
              onClick={() => {
                setSelectedButton(0);
              }}
            >
              Customer
            </button>
            <button
              className={`rounded-t-md py-2 px-4 ${
                selectedButton == 1
                  ? 'bg-white border-t border-gray-300'
                  : 'bg-[#F2F2F2]'
              }`}
              onClick={() => {
                setSelectedButton(1);
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
