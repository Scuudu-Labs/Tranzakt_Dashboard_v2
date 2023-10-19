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
      <div className="flex mt-6 w-[800px] flex-col gap-y-3 ">
        <div className="flex gap-x-3 w-full">
          <AmountInfoCard
            label="TOTAL USER BALANCE"
            amount="₦500,964.00"
            change="+15.2%"
          />

          <AmountInfoCard
            label="TOTAL CUSTOMER BALANCE"
            amount="₦300,964.00"
            change="+15.2%"
          />

          <AmountInfoCard
            label="TOTAL MERCHANT BALANCE"
            amount="₦200,964.00"
            change="+15.2%"
          />
        </div>
        <div>
          <AreaChartCard
            data={sampleAreaChartData}
            label="Transaction Statistics ₦"
          />
        </div>
      </div>
      <div className="ml-6  mt-6 w-full flex flex-col">
      <AmountInfoCard
            label="TOTAL USER BALANCE"
            amount="₦500,964.00"
            change="+15.2%"
          />

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
