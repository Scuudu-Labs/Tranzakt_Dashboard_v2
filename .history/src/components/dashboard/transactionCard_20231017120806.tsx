import React from 'react'

const TransactionCard = () => {
  return (
    <div className="w-full h-full flex flex-col rounded-[16px] bg-white border-[1px] py-[16px] border-[#E3E3E3]">
        <h2
        className="font-montserrat font-semibold tex-[24px] border-b pb-3 border-[#E3E3E3] px-[16px] tracking-[0.5px] py-2"
        >Transactions</h2>
        <div className='px-[16px] flex items-center py-[10px]'>
            <span>External</span>
        </div>
  </div>
  )
}

export default TransactionCard