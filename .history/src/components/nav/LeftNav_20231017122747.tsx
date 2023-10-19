import { IoPeopleOutline } from "react-icons/io5";
import { PiFlagBannerLight } from "react-icons/pi";
import { MdOutlineDashboard } from "react-icons/md";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import { NavLink } from "react-router-dom";
export default function LeftNavbar() {
  return (
    <div className="h-full w-[210px] fixed flex flex-col  py-5 justify-between">
      <div className="flex flex-col px-4 py-4 gap-y-3">
        <NavLink
          to={'/dashboard'}
          className={({isActive, isPending}) => (
            isActive ? "bg-[#32C87D] flex items-center gap-x-2 py-3 px-5 rounded-[16px]  text-white" : isPending ? 
            "flex items-center w-full gap-x-2 hover:bg-[#E9F7F0] text-[#A1A1A1]   py-3 px-5 hover:text-[#32c87d]"
            : "flex items-center w-full gap-x-2 hover:bg-[#E9F7F0] text-[#A1A1A1] hover:rounded-[16px]  py-3 px-5 hover:text-[#32c87d]"
           )}
        >
          <div className="text-lg">
            <MdOutlineDashboard style={{color: '#A1A1A1'}} />
          </div>
          <span className=" font-montserrat font-[18px]">Dashboard</span>
        </NavLink>
        <NavLink
          to={'/manageuser'}
          className={({isActive, isPending}) => (
            isActive ? "bg-[#32C87D] flex items-center gap-x-2 py-3 px-5 rounded-[16px] text-white" : isPending ? 
            "flex items-center gap-x-2 hover:bg-[#E9F7F0] text-[#A1A1A1]  py-3 px-5 hover:text-[#32c87d]"
            : "flex items-center w-full gap-x-2 hover:bg-[#E9F7F0] text-[#A1A1A1] hover:rounded-[16px]  py-3 px-5 hover:text-[#32c87d]"
           )}
          
        >
          <div className="text-lg">
            <IoPeopleOutline style={{color: '#A1A1A1'}}/>
          </div>
          <span className="font-montserrat font-[18px]">Manage User</span>
        </NavLink>
        <NavLink
          to={"/campaign"}
          className={({isActive, isPending}) => (
            isActive ? "bg-[#32C87D]  flex items-center gap-x-2 py-3 px-5 rounded-[16px] text-white" : isPending ? 
            "flex items-center gap-x-2 hover:bg-[#E9F7F0] text-[#A1A1A1]  py-3 px-5 hover:text-[#32c87d]"
            : "flex items-center w-full gap-x-2 hover:bg-[#E9F7F0] text-[#A1A1A1] hover:rounded-[16px]   py-3 px-5 hover:text-[#32c87d]"
           )}    
        >
          <div className="text-lg">
            <PiFlagBannerLight style={{color: '#A1A1A1'}}/>
          </div>
          <span className="font-montserrat font-[18px]">Campaign</span>
        </NavLink>
      </div>
      <button className="flex items-center gap-x-2 text-[#FF2636] px-5 py-2">
        <div>
          <Logout />
        </div>
        <div className="text-[#A1A1A1] font-montserrat font-[18px]">Logout</div>
      </button>
    </div>
  );
}
