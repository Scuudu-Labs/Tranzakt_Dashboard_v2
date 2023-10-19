import React, {useState} from 'react'

const TransactionCard = () => {
    const [state, setState] = useState('external')
  return (
    <div className="w-full h-full flex flex-col rounded-[16px] bg-white border-[1px] py-[16px] border-[#E3E3E3]">
        <h2
        className="font-montserrat font-semibold tex-[24px] border-b pb-3 border-[#E3E3E3] px-[16px] tracking-[0.5px] py-2"
        >Transactions</h2>
        <div className='px-[16px] flex items-center py-[16px]'>
            <span className={`mr-2 ${state === "external" ? "text-[#32C87D]" : "text-[#A1A1A1]"} font-montserrat`}>External</span>
            <span 
            className={`mr-2 ${state === "internal" ? "text-[#32C87D]" : "text-[#A1A1A1]"} font-montserrat`}
            >Internal</span>
        </div>
  </div>
  )
}

export default TransactionCard