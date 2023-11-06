const DisplayBox = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="w-full flex flex-col px-[16px] py-[10px] h-[70px]  border-[0.5px] border-[#A1A1A1] rounded-[8px]">
      <span className="text-[#3F3F3F] text-[12px] capitalize font-montserrat pb-1">
        {title}
      </span>
      <h2 className="text-[#272626] text-[16px] tracking-[0.3px] font-montserrat font-[500] ">
        {value}
      </h2>
    </div>
  );
};

const PersonalDetails = () => {
  return (
    <div className="w-full rounded-[8px] py-4  bg-white  border-[#EAEAEA] border shadow-sm">
      <h1 className="text-[#3F3F3F] px-4 text-[18px]  font-montserrat mb-3">
        Personal Details
      </h1>
      <div className="h-[380px] overflow-auto">
        <div className="grid grid-rows-5  overflow-y-auto  px-4 grid-cols-2 gap-4">
          <DisplayBox title="first name" value="Alessa" />
          <DisplayBox title="Last name" value="Abubakar" />
          <DisplayBox title="DOB" value="2/02/2002" />
          <DisplayBox title="Gender" value="Female" />
          <div className="col-span-2">
            <DisplayBox title="Email" value="alessaabubakar@gmail.com" />
          </div>
          <DisplayBox title="Phone Number" value="+2349012345678" />
          <DisplayBox title="User ID" value="#1234" />
          <div className="col-span-2">
            <DisplayBox title="Occupation" value="Cooperate Worker" />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="text-white bg-[#32C87D] w-full mx-auto py-3 mb-2 mt-2 rounded-md"
            >
              Activate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
