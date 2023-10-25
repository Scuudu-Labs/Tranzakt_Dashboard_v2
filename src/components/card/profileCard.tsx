import React, { LegacyRef } from 'react'
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import { useAppDispatch } from '../../redux/hooks';
import { setToken, setUser } from '../../redux/slice/auth';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({reference}: {reference:LegacyRef<HTMLDivElement>}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onLogOut = () => {
    dispatch(setUser(null));
    dispatch(setToken(''))
    navigate('/');
  };
  return (
    <div ref={reference} className='w-[309px] h-[287px] right-3 top-[85px] p-[16px] absolute rounded-[8px] shadow-md bg-white flex flex-col items-center justify-center'>
        <div className='w-[71px] h-[71px] rounded-[71px] bg-[#EBF9F2] flex items-center justify-center'>
            <h2 className='uppercase text-[#3F3F3F] font-montserrat font-semibold text-center text-[25px]'>OK</h2>
        </div>
        <h3 className='capitalize text-[#3F3F3F] font-montserrat  font-semibold text-center text-[18px] my-4'>Oloson Kate</h3>
        <div className='w-full p-4 flex items-center cursor-pointer border-b border-[#E3E3E3] mt-10' onClick={onLogOut}>
            <Logout />
            <span className='text-[#FF2636] font-montserrat font-[500]  text-[16px] ml-4'>Logout</span>
        </div>
    </div>
  )
}

export default ProfileCard