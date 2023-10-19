import { IoPeopleOutline } from "react-icons/io5";
import { PiFlagBannerLight } from "react-icons/pi";
import { MdOutlineDashboard } from "react-icons/md";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";
export default function LeftNavbar() {
  const navigate = useNavigate();
  return (
    <div className="h-full w-[210px] flex flex-col  py-5 justify-between">
      <div className="flex flex-col gap-y-3">
        <button
          className="flex items-center gap-x-2 hover:bg-[#E9F7F0] hover:border-r-[8px] py-3 px-5 hover:border-[#32C87D] hover:text-[#32c87d]"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <div className="text-lg">
            <MdOutlineDashboard />
          </div>
          <div className="text-sm">Dashboard</div>
        </button>
        <button
          className="flex items-center gap-x-2 hover:bg-[#E9F7F0] hover:border-r-[8px] py-3 px-5 hover:border-[#32C87D] hover:text-[#32c87d]"
          onClick={() => {
            navigate("/manageuser");
          }}
        >
          <div className="text-lg">
            <IoPeopleOutline />
          </div>
          <div className="text-sm text-[#A1A1A1] font-montserrat font-[18px]">Manage User</div>
        </button>
        <button className="flex items-center gap-x-2 hover:bg-[#E9F7F0] hover:border-r-[8px] py-3 px-5 hover:border-[#32C87D] hover:text-[#32c87d]">
          <div className="text-lg">
            <PiFlagBannerLight />
          </div>
          <div className="text-sm">Campaign</div>
        </button>
      </div>
      <button className="flex items-center gap-x-2 text-[#FF2636] px-5 py-2">
        <div>
          <Logout />
        </div>
        <div className="text-sm">Logout</div>
      </button>
    </div>
  );
}
