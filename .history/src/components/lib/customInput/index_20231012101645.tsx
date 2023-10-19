import { useState, useEffect } from 'react';

function VerificationCodeInput() {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  
  // You can change this code to automatically populate the fields
  useEffect(() => {
    const autoPopulatedCode = '123456'; // Replace with your code
    setVerificationCode([...autoPopulatedCode.split(''), '', '', '', '', '']);
  }, []);

  const handleCodeChange = (event, index) => {
    const value = event.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
    }
  };

  return (
   <div className="flex items-center">
     {[1,2,3,4,5].map((value, index) => (
      <input
        key={index}
        className="w-[55px] h-[55px] border border-[#E3E3E3] rounded-[8px] rounded-[8px]"
        type="text"
        value={value}
      />
    ))}
   </div>
  );
}

export default VerificationCodeInput;
