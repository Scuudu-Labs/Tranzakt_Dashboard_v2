import { ReactComponent as TranzaktLogo } from "../../assets/tranzaktlogo.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Dropdown } from "../../assets/icons/drop.svg";

import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import ProfileCard from "../card/profileCard";
import NotificationCard from "../card/notificationCard";

export default function TopNavbar() {
  const [notificationCount, setNotificationCount] = useState(10);
  const [openProfile, setOpenProfile] = useState(false);
  const [notify, setNotify] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null)
  const clickOutside = (e: MouseEvent<HTMLElement> ) => {
    if (profileRef.current?.contains(e.target)) return;
    setOpenProfile(false);
  };
  useEffect(() => {
    window.addEventListener('mousedown', clickOutside);
    return () => window.removeEventListener('mousedown', clickOutside);
  }, []);
  return (
    <div className="sticky z-20 top-0 bg-white h-[80px] border-b-[0.5px] border-[#E3E3E3] w-full flex  items-center ">
      {openProfile && <ProfileCard reference={profileRef} />}
      {notify && <NotificationCard />}
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
        <div className="h-[50px] w-[50px] rounded-full bg-[#F2FFF7] cursor-pointer flex items-center justify-center " onClick={() => setNotify(!notify)}>
          <div className="relative w-[10px] mb-5 ml-3">
            {notificationCount > 0 ? (
              <div className="h-[20px] w-[20px] rounded-[20px] bg-red text-[10px] bg-[#FF2636] absolute -top-3 -left-1 text-white z-10 flex items-center justify-center">
                <p className="font-bold font-montserrat">
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

       <div className="flex items-center" onClick={() => setOpenProfile(!openProfile)}>
       <div className="h-[40px] cursor-pointer mr-2 relative w-[40px] rounded-full bg-[#32C87D] flex items-center justify-center text-sm text-white">
          OK
        </div>
        <div className="cursor-pointer">
          <Dropdown />
        </div>
       </div>
      </div>
      </div>
    </div>
  );
}
