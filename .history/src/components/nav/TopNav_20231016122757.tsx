import { ReactComponent as TranzaktLogo } from "../../assets/tranzaktlogo.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { useState } from "react";

export default function TopNavbar() {
  const [notificationCount, setNotificationCount] = useState(1);
  return (
    <div className="sticky top-0 h-[80px] border-b-[0.5px] border-[#BABABA] w-full flex justify-between items-center z-10">
      <div className="mx-4">
        <TranzaktLogo />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[648px] relative">

        </div>
      <div className="flex items-center justify-center gap-x-5 px-5">
        <div className="h-[50px] w-[50px] rounded-full bg-[#F2FFF7] flex items-center justify-center ">
          <div className="relative w-[10px] mb-5 ml-3">
            {notificationCount > 0 ? (
              <div className="h-[15px] w-[15px] rounded-full bg-red text-[10px] bg-[#FF2636] absolute top-0 text-white z-10 flex items-center justify-center">
                {notificationCount}
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
