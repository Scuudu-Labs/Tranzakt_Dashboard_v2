import { useState } from "react";
import MainContainer from "../../components/layout/MainContainer";
import { PiFunnelLight } from "react-icons/pi";
import ManagerUserTable from "../../components/tables/ManageUserTable";
import { sampleManageUserTableData } from "../../data";
import { ReactComponent as Search } from "../../assets/icons/search.svg";


export default function ManageUserPage() {
  const [selectedButton, setSelectedButton] = useState(0);
  return (
    <MainContainer>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <div className="bg-white rounded-md text-sm p-1 h-[45px]">
            <button
              className={`rounded-md py-2 px-4 ${
                selectedButton == 0 ? "bg-[#32C87D] text-white" : ""
              }`}
              onClick={() => {
                setSelectedButton(0);
              }}
            >
              Customer
            </button>
            <button
              className={`rounded-md py-2 px-4 ${
                selectedButton == 1 ? "bg-[#32C87D] text-white" : ""
              }`}
              onClick={() => {
                setSelectedButton(1);
              }}
            >
              Merchant
            </button>
          </div>
            <div className="w-[600px] h-[48px] flex items-center  ">
              <input type="text" name="search" className="h-[48px] focus:outline-none rounded-[8px] rounded-r-none w-[90%] px-[16px]" placeholder="Search" />
              <div className="border bg-white border-[#EAEAEA]  rounded-[8px]  rounded-l-none   flex items-center justify-center w-[10%] h-[48px]">
                <Search />
              </div>
            </div>
          <button className="bg-white rounded-md mt-1 flex gap-x-2 px-5   h-[40px] justify-center items-center hover:bg-[#32C87D] hover:text-white">
            <div className="text-xl">
              <PiFunnelLight />
            </div>
            <div className="pt-1">Filter</div>
          </button>
        </div>
        <ManagerUserTable data={sampleManageUserTableData} />
      </div>
    </MainContainer>
  );
}
