const DisplayBox = ({title, value}: {title:string, value: string}) => {
    return (
        <div className='w-full flex flex-col px-[16px] py-[8px]  border-[0.5px] border-[#A1A1A1] rounded-[8px]'>
            <span className='text-[#3F3F3F] text-[12px] capitalize font-montserrat pb-3'>{title}</span>
            <h2 className='text-[#272626] text-[16px] tracking-[0.3px] font-montserrat font-[500] '>{value}</h2>
        </div>
    )
}

const PersonalDetails = () => {
  return (
    <div className='w-full rounded-[8px] py-4 h-[450px] bg-white  border-[#EAEAEA] border shadow-sm'>
        <h1 className='text-[#3F3F3F] px-4 text-[18px]  font-montserrat mb-3'>Personal Details</h1>
        <div className='grid grid-rows-5 px-4 grid-cols-2 gap-6'>
            <DisplayBox title='first name' value='Alessa' />
            <DisplayBox title='first name' value='Alessa' />
            <DisplayBox title='first name' value='Alessa' />
            <DisplayBox title='first name' value='Alessa' />
            <div className='col-span-2'>
            <DisplayBox title='first name' value='Alessa' />
            </div>
            <DisplayBox title='first name' value='Alessa' />
            <DisplayBox title='first name' value='Alessa' />

        </div>
    </div>
  )
}

export default PersonalDetails