type IProps = {
  label: string;
};

const UploadFile = ({ label }: IProps) => {
  return (
    <div className="flex w-full  mx-auto flex-col   gap-y-2">
      <label className="text-[14px] font-montserrat font-[500]">{label}</label>
      <div className="flex w-full h-[158px] rounded-[8px] border border-[#E3E3E3]"></div>
    </div>
  );
};

export default UploadFile;
