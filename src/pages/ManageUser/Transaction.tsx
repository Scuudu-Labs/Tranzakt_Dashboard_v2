import { CreditIcon, DebitIcon } from "../../assets";
import IconWrap from "../../components/ui/svgWrapper";

interface ITransact {
    type: string;
    text: string
    details: string
    amount: string
    date: string
}
const Transaction = ({type, text, details, amount, date}:ITransact ) => {
    return(
        <div className='py-4 px-4 flex items-center justify-between border-b last:border-none border-[#E3E3E3]'>
            <div className='flex items-center'>
                {type === "credit" ? 
        <IconWrap src={CreditIcon} />
        : <IconWrap src={DebitIcon} /> }
                <div className='flex flex-col ml-3'>
                    <span className='text-[12px] font-montserrat text-[#3F3F3F] tracking-[0.3px] font-[500]'>{text}</span>
                    <span className='text-[#A1A1A1] py-1 uppercase text-[12px] font-montserrat tracking-[0.3px] font-[500]'>{details}</span>
                </div>
            </div>
            <div className='flex flex-col text-right'>
                <span className={`${type === "credit" ? "text-[#32C87D]" : "text-[#FF2636]"} text-[16px] tracking-[0.4px] font-montserrat `}>{amount}</span>
                <span className='text-[#A1A1A1] py-1 uppercase text-[12px] font-montserrat tracking-[0.3px] font-[400]'>{date}</span>
            </div>
        </div>
    )
}

export default Transaction