import { ReactComponent as UserLarge } from "../../assets/icons/user-large.svg";
export default function AmountInfoCard(props: {
  amount: string;
  change: string;
  label: string;
  isReduction?: boolean;
}) {
  return (
    <div className="w-[260px] h-[107px] flex flex-col rounded-[16px] bg-white border-[1px] p-[16px] border-[#EAEAEA]">
      <p className="text-[#A1A1A1] font-montserrat text-[12px] tracking-[0.3px] font-[500]">{props.label}</p>
      <h2 className="font-montserrat font-semibold tex-[24px] tracking-[0.3px] py-2 ">{props.amount}</h2>
      {/* <div className="flex  w-full">
       
        <div className="rounded-lg bg-[#EBF9F2] text-[#32C87D] flex items-center justify-center w-[50px] h-[30px] text-xs mt-3 mr-5 ">
          {props.change}
        </div>
      </div>
      <div className="text-4xl ml-3">{props.amount}</div>

      <div className="text-xs ml-3">{props.label}</div> */}
    </div>
  );
}
