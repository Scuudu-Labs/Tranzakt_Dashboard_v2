import { ReactComponent as UserLarge } from "../../assets/icons/user-large.svg";
export default function AmountInfoCard(props: {
  amount: string;
  change: string;
  label: string;
  isReduction?: boolean;
}) {
  return (
    <div className="w-[200px] h-[130px] rounded-md bg-white flex flex-col">
      <div className="flex justify-between w-full">
       
        <div className="rounded-lg bg-[#EBF9F2] text-[#32C87D] flex items-center justify-center w-[50px] h-[30px] text-xs mt-3 mr-5 ">
          {props.change}
        </div>
      </div>
      <div className="text-4xl ml-3">{props.amount}</div>

      <div className="text-xs ml-3">{props.label}</div>
    </div>
  );
}
