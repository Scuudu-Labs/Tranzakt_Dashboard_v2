export default function AmountInfoCard(props: {
  amount: string;
  change: string;
  label: string;
  isReduction?: boolean;
}) {
  return (
    <div className="w-full h-[107px] flex flex-col rounded-[16px] bg-white border-[1px] p-[16px] border-[#EAEAEA]">
      <p className="text-[#A1A1A1] font-montserrat text-[11px] tracking-[0.3px] font-[500]">
        {props.label}
      </p>
      <h2 className="font-montserrat font-semibold text-[21px] tracking-[0.5px] pt-1 pb-2 ">
        {props.amount}
      </h2>
      <div className="flex items-center">
        <span className="text-[#32C87D] text-[12px] font-semibold tracking-[0.3px]">
          {props.change}
        </span>
        <span className="text-[#A1A1A1] text-[12px] font-[400] tracking-[0.3px] ml-2">
          than last week
        </span>
      </div>
    </div>
  );
}
