import { ReactComponent as Credit} from "../../assets/icons/credit.svg";
import { ReactComponent as Debit} from "../../assets/icons/debit.svg";


interface ITransact {
    type: string;
    text: string
    details: string
    amount: string
    date: string
}

const transactions = [
    {
        type: "credit",
        text: "Bank Transfer",
        details: "770 TF ALESSA AB...",
        amount: "₦9,430.15",
        date: "14:37 | 10 AUG, 2023"
    },
    {
        type: "debit",
        text: "Bank Withdrawal",
        details: "770 TF ALESSA AB...",
        amount: "₦9,430.15",
        date: "14:37 | 10 AUG, 2023"
    },
    {
        type: "credit",
        text: "Bank Transfer",
        details: "770 TF ALESSA AB...",
        amount: "₦9,430.15",
        date: "14:37 | 10 AUG, 2023"
    },
    {
        type: "debit",
        text: "Bank Transfer",
        details: "770 TF ALESSA AB...",
        amount: "₦9,430.15",
        date: "14:37 | 10 AUG, 2023"
    },
    
]

const EachTransaction = ({type, text, details, amount, date}:ITransact ) => {
    return(
        <div className='py-4 px-4 flex items-center justify-between border-b last:border-none border-[#E3E3E3]'>
            <div className='flex items-center'>
                {type === "credit" ? <Credit /> : <Debit /> }
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

const TransactionHistory = () => {
  return (
    <div className='w-full rounded-[8px] max-h-[450px] py-4 bg-white  border-[#EAEAEA] border shadow-sm'>
        <h1 className='text-[#3F3F3F] px-4 text-[18px]  font-montserrat mb-3'>Transaction History</h1>
        <div className='flex flex-col'>
            {
                transactions.map((transaction, index) => (
                    <EachTransaction key={index} type={transaction.type} text={transaction.text} amount={transaction.amount} details={transaction.details} date={transaction.date}/>
                ))
            }
        </div>
    </div>
  )
}

export default TransactionHistory