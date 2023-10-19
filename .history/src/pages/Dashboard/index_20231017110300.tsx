import DashboardSection from "../../components/dashboard/DashboardSection";
import MainContainer from "../../components/layout/MainContainer";
import { PiFunnelLight } from "react-icons/pi";

export default function DashboardPage() {
  return (
    <MainContainer>
      <div className="flex justify-between">
          <h2 className="text-3xl ">Quick Overview</h2>
        <button className="bg-white rounded-md flex gap-x-2 px-5 mt-3 h-[40px] justify-center items-center hover:bg-[#32C87D] hover:text-white">
          <div className="text-xl">
            <PiFunnelLight />
          </div>
          <div className="pt-1">Filter</div>
        </button>
      </div>
      <DashboardSection />
    </MainContainer>
  );
}
