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
   <div className="flex items-center w-[400px] mx-auto">
     {verificationCode.map((value, index) => (
      <input
        key={index}
        type="text"
        value={value}
        onChange={(event) => handleCodeChange(event, index)}
      />
    ))}
   </div>
  );
}

export default VerificationCodeInput;
