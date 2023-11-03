import { InputProps } from './types';

const TextInput = ({ error, label, touched, ...props }: InputProps) => {
  return (
    <div className="flex w-full  mx-auto flex-col mb-4 gap-y-2">
      <label className="text-[14px] font-[500] font-montserrat">{label}</label>
      <input
        className={`${
          touched && error
            ? 'border-red-400'
            : touched && !error
            ? 'border-green-400'
            : 'border-[#A1A1A1]'
        } w-full rounded-md py-2 text-[14px] border outline-none h-[48px] font-[500] border-[#A1A1A1] font-montserrat  placeholder-[#A1A1A1] px-2`}
        {...props}
      />
      <p className="text-[12px] text-red-500 -mt-1">
        {touched && error ? error : ''}
      </p>
    </div>
  );
};

export default TextInput;
