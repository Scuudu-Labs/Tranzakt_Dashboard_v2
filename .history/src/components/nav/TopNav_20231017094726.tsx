import { ReactComponent as TranzaktLogo } from "../../assets/tranzaktlogo.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { useState } from "react";

export default function TopNavbar() {
  const [notificationCount, setNotificationCount] = useState(10);
  return (
    <div className="sticky top-0 h-[80px] border-b-[0.5px] border-[#BABABA] w-full flex  items-center z-10">
      <div className="mx-4">
        <TranzaktLogo />
      </div>
      <div className="flex justify-between px-6 w-full items-center">
        <div className="w-[648px] relative px-6">
          <div className="absolute left-10  top-[14px]">
          <Search />
          </div>
          <input type="text" className="w-full text-[16px] font-montserrat bg-[#F5F7F9] focus:outline-none rounded-[8px] px-[44px] text-[#3F3F3F] border-[#CFCFCF] border py-[11px]" placeholder="Query" />
        </div>
      <div className="flex items-center justify-center gap-x-5 px-5">
        <div className="h-[50px] w-[50px] rounded-full bg-[#F2FFF7] flex items-center justify-center ">
          <div className="relative w-[10px] mb-5 ml-3">
            {notificationCount > 0 ? (
              <div className="h-[20px] w-[20px] rounded-[20px] bg-red text-[10px] bg-[#FF2636] absolute top-0 text-white z-10 flex items-center justify-center">
                <p className="font-bold">
                {notificationCount}
                </p>
              </div>
            ) : (
              <></>
            )}
            <div className="absolute top-0 right-0">
              <Bell />
            </div>
          </div>
        </div>

        <div className="h-[40px] w-[40px] rounded-full bg-[#32C87D] flex items-center justify-center text-sm text-white">
          OK
        </div>
      </div>
      </div>
    </div>
  );
}
