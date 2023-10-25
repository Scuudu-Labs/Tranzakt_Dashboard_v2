import { InputProps } from "./types"

const TextInput = ({error, label, touched,  ...props}: InputProps) => {
  return (
    <div className="flex w-[400px] mx-auto flex-col mb-6 gap-y-2">
    <label className="text-[12px]">{label}</label>
    <input
      className={`${touched && error ? "border-red-400" : touched && !error ? 'border-green-400' : "border-[#A1A1A1]"} w-full rounded-md py-2 text-[13px] border outline-none h-[48px] border-[#A1A1A1]  placeholder-[#A1A1A1] px-2`}
      placeholder="Enter email"
      {...props}
    ></input>
    <p className="text-[12px] text-red-500 -mt-1">{ touched && error ? error : ''}</p>
  </div>
  )
}

export default TextInput