import AreaChartCard from "../charts/AreaChartCard";
import AmountInfoCard from "./InfoCard";
import {
  sampleAreaChartData,
  samplePieChartData,
  samplePieChartData2,
} from "../../data";
import PieChartCard from "../charts/PieChartCard";

export default function DashboardSection() {
  return (
    <div className="w-full flex justify-between my-2">
      <div className="flex mt-6 flex-col gap-y-3 ">
        <div className="flex gap-x-5">
          <AmountInfoCard
            label="TOTAL USER BALANCE"
            amount="₦300k"
            change="+15.2%"
          />

          <AmountInfoCard
            label="TOTAL CUSTOMER BALANCE"
            amount="₦500k"
            change="+15.2%"
          />

          <AmountInfoCard
            label="TOTAL MERCHANT BALANCE"
            amount="₦100k"
            change="+15.2%"
          />
        </div>
        {/* <div>
          <AreaChartCard
            data={sampleAreaChartData}
            label="Transaction Volume ₦"
          />
        </div> */}
      </div>
      {/* <div className="flex flex-col gap-y-3">
        <PieChartCard
          label={"Customers"}
          sublabel="500 users"
          data={samplePieChartData}
        />

        <PieChartCard
          label={"Merchants"}
          sublabel="500 users"
          data={samplePieChartData2}
        />
      </div> */}
    </div>
  );
}
