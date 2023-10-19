import React from 'react'
import MainContainer from '../../components/layout/MainContainer'
import { ReactComponent as GoBack } from "../../assets/icons/goBack.svg";


const EachUser = () => {
  return (
    <MainContainer>
        <div className='py-4 flex items-end'>
            <GoBack />
            <span className='text-[18px] text-[#3F3F3F]'>Back</span>
        </div>
    </MainContainer>
  )
}

export default EachUser