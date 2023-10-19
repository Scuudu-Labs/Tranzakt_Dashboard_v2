import React from 'react'
import MainContainer from '../../components/layout/MainContainer'
import { ReactComponent as GoBack } from "../../assets/icons/goBack.svg";
import { useNavigate } from 'react-router-dom';


const EachUser = () => {
    const navigate = useNavigate()
  return (
    <MainContainer>
        <div className='py-3 flex items-end cursor-pointer' onClick={() => navigate(-1)}>
            <GoBack />
            <span className='text-[18px] text-[#3F3F3F] font-montserrat font-[500] ml-3'>Back</span>
        </div>
        <div className='flex items-center w-full h-[220px] py-[16px] px-[10px] border border-[#EAEAEA] rounded-[16px] bg-white shadow-md mt-2'>

        </div>
    </MainContainer>
  )
}

export default EachUser