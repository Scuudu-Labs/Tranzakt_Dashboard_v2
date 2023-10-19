import AreaChartCard from "../charts/AreaChartCard";
import AmountInfoCard from "./InfoCard";
import {
  sampleAreaChartData,
  samplePieChartData,
  samplePieChartData2,
} from "../../data";
import PieChartCard from "../charts/PieChartCard";
import TransactionCard from "./transactionCard";

export default function DashboardSection() {
  return (
    <div className="w-full flex flex-col my-2">
      <div className="flex items-center">
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
      <div className="ml-8 gap-y-4 mt-6 w-full flex flex-col">
        <AmountInfoCard
            label="TOTAL USER BALANCE"
            amount="₦500,964.00"
            change="+15.2%"
          />
        <AmountInfoCard
            label="TOTAL USER BALANCE"
            amount="₦500,964.00"
            change="+15.2%"
          />
        <TransactionCard />
      </div>
      </div>
      <div className="flex gap-3">
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
      </div>
    </div>
  );
}
