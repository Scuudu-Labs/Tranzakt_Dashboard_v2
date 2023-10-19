import React from 'react'
import MainContainer from '../../components/layout/MainContainer'
import { ReactComponent as GoBack } from "../../assets/icons/goBack.svg";


const EachUser = () => {
  return (
    <MainContainer>
        <div className='py-3 flex items-end'>
            <GoBack />
            <span className='text-[18px] text-[#3F3F3F] font-montserrat font-[500] ml-3'>Back</span>
        </div>
    </MainContainer>
  )
}

export default EachUser