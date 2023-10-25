import { IoPeopleOutline } from "react-icons/io5";
import { PiFlagBannerLight } from "react-icons/pi";
import { MdOutlineDashboard } from "react-icons/md";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = ({link, title, icon}: {link:string; title: string, icon: React.ReactNode}) => {
  return (
    <NavLink
          to={link}
          className={({isActive, isPending}) => (
            isActive ? "bg-[#32C87D] flex items-center gap-x-2 py-3 px-5 rounded-[16px]  text-white" : isPending ? 
            "flex items-center w-full gap-x-2 hover:bg-[#E9F7F0] text-[#A1A1A1]   py-3 px-5 hover:text-[#32c87d]"
            : "flex items-center w-full gap-x-2 hover:bg-[#E9F7F0] text-[#A1A1A1] hover:rounded-[16px]  py-3 px-5"
           )}
        >
          <div className="text-lg">
            {icon}
          </div>
          <span className=" font-montserrat font-[18px]">{title}</span>
        </NavLink>
  )
}

export default function LeftNavbar() {
  const location = useLocation();
  const pathname = location.pathname
  return (
    <div className="h-screen fixed w-[210px]  flex flex-col  py-5 justify-between">
      <div className="flex flex-col px-4 py-4 gap-y-3">
        <Navigation link="/dashboard" title="Dashboard"  icon={
            <MdOutlineDashboard style={{color: `${pathname === '/dashboard' ? "#fff" : '#A1A1A1'}`}} />
        }/>
        <Navigation link="/manageuser" title="Manage User" 
        icon={<IoPeopleOutline style={{color: `${pathname === '/manageuser' ? "#fff" : '#A1A1A1'}`}} />}
        />
        <Navigation link="/campaign" title="Campaign" 
          icon={ <PiFlagBannerLight style={{color: `${pathname === '/campaign' ? "#fff" : '#A1A1A1'}`}} />}
        />
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
