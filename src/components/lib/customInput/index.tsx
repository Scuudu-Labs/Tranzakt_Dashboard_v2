
function VerificationCodeInput() {
  
  return (

   
     <div className="flex w-full justify-between my-3 items-center">
     {[1,2,3,4,5].map((value, index) => (
      <input
        key={index}
        className="w-[55px] p-2 flex items-center justify-center text-center font-montserrat font-semibold text-[19px] text-[#3F3F3F] h-[55px] border border-[#E3E3E3] rounded-[8px] rounded-[8px]"
        type="text"
        value={value}
      />
    ))}
    
   </div>
  
  
  );
}

export default VerificationCodeInput;
