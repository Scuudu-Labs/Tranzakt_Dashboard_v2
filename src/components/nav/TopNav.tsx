/* eslint-disable @typescript-eslint/no-explicit-any */
import { BellIcon, DropIcon, SearchIcon, TLogoIcon } from '../../assets';
import { useEffect, useRef, useState } from 'react';
import ProfileCard from '../card/profileCard';
import NotificationCard from '../card/notificationCard';
import IconWrap from '../ui/svgWrapper';
import ModalWraper from '../modal';

export default function TopNavbar() {
  const [openProfile, setOpenProfile] = useState(false);
  const [notify, setNotify] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  const clickOutside = (e: any) => {
    if (profileRef.current?.contains(e.target)) return;
    if (notificationRef.current?.contains(e.target)) return;
    setOpenProfile(false);
    setNotify(false);
  };
  useEffect(() => {
    window.addEventListener('mousedown', clickOutside);
    return () => window.removeEventListener('mousedown', clickOutside);
  }, []);
  return (
    <div className="sticky  top-0 bg-white h-[80px] border-b-[0.5px] border-[#E3E3E3] w-full flex  items-center ">
      {openProfile && (
        <ModalWraper show={openProfile} close={() => setOpenProfile(false)}>
          <ProfileCard reference={profileRef} />
        </ModalWraper>
      )}
      {notify && (
        <ModalWraper show={notify} close={() => setNotify(false)}>
          <NotificationCard reference={notificationRef} />
        </ModalWraper>
      )}
      <div className="mx-4">
        <IconWrap src={TLogoIcon} />
      </div>
      <div className="flex justify-between px-6 w-full items-center">
        <div className="w-[648px] relative px-6">
          <div className="absolute left-10  top-[14px]">
            <IconWrap src={SearchIcon} />
          </div>
          <input
            type="text"
            className="w-full text-[16px] font-montserrat bg-[#F5F7F9] focus:outline-none rounded-[8px] px-[44px] text-[#3F3F3F] border-[#CFCFCF] border py-[11px]"
            placeholder="Query"
          />
        </div>
        <div className="flex items-center  justify-center gap-x-5 px-5">
          <div
            className="h-[50px] w-[50px] rounded-full relative bg-[#F2FFF7] cursor-pointer flex items-center justify-center "
            onClick={() => setNotify(!notify)}
          >
            <div className="h-[20px] w-[20px]  rounded-[20px] bg-red text-[10px] bg-[#FF2636] absolute top-0 right-2 text-white z-10 flex items-center justify-center">
              <p className="font-bold font-montserrat">{10}</p>
            </div>

            <IconWrap src={BellIcon} style="w-[20px] h-[20px]" />
          </div>

          <div
            className="flex items-center"
            onClick={() => setOpenProfile(!openProfile)}
          >
            <div className="h-[40px] cursor-pointer mr-2 relative w-[40px] rounded-full bg-[#32C87D] flex items-center justify-center text-sm text-white">
              OK
            </div>
            <div className="cursor-pointer">
              <IconWrap src={DropIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
