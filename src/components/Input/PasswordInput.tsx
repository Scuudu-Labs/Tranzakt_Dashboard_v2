import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HideSvg } from "../../assets/icons/hide.svg";


const PasswordInput = ({error, label}: InputProps) => {
  const [hide, setHide] = useState(false)
  const navigate = useNavigate();

  return (
    <div className="flex w-[400px] mx-auto mb-6 relative flex-col gap-y-2">
    <div className="absolute right-4 cursor-pointer top-10" onClick={()=> setHide(!hide)}>
        <HideSvg />
      </div>
      <label className="text-[12px]">{label}</label>
      <input
        className="w-full rounded-md py-2 h-[48px] text-[13px] border outline-none border-[#A1A1A1] placeholder-[#A1A1A1] px-2"
        placeholder="Enter Password"
        type={hide ? "text" : "password"}
      ></input>
      <p className="text-[12px] text-red-500 -mt-1">{error}</p>
      <label
        className="text-[#A1A1A1] text-right text-[13px] cursor-pointer px-1"
        onClick={() => navigate('/reset_password')}
      >
        Forgot password? <span className="font-bold text-[#32C87D]">Click here</span>
      </label>
    </div>
  )
}

export default PasswordInput