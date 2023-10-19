import React from 'react'

const NotificationCard = () => {
  return (
    <div className='w-[428px] h-[464px] right-0 top-[85px] p-[16px] absolute rounded-[8px] bg-white flex flex-col items-center justify-center'>
        <div className='w-[71px] h-[71px] rounded-[71px] bg-[#EBF9F2] flex items-center justify-center'>
            <h2 className='uppercase text-[#3F3F3F] font-montserrat font-semibold text-center text-[25px]'>OK</h2>
        </div>
        <h3 className='capitalize text-[#3F3F3F] font-montserrat font-semibold text-center text-[18px] my-4'>Oloson Kate</h3>
    </div>
  )
}

export default NotificationCard