import { InputProps } from './types';

const TextArea = ({ error, label, touched, ...props }: InputProps) => {
  return (
    <div className="flex w-full  mx-auto flex-col   gap-y-2">
      <label className="text-[14px] font-montserrat font-[500]">{label}</label>
      <textarea
        rows={20}
        className={`${
          touched && error
            ? 'border-red-400'
            : touched && !error
            ? 'border-green-400'
            : 'border-[#A1A1A1]'
        } w-full rounded-md py-2 text-[14px] h-[158px] font-montserrat border font-[500] outline-none border-[#A1A1A1]  placeholder-[#A1A1A1] px-2`}
        {...props}
      />
      <p className="text-[12px] text-red-500 -mt-1">
        {touched && error ? error : ''}
      </p>
    </div>
  );
};

export default TextArea;
