import React from 'react'
import backgroundImage from "../../assets/background.svg";

const ResetPassword = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-screen h-screen flex items-center justify-center"
    >
      <ResetPasswordForm />
    </div>
  )
}

export default ResetPassword