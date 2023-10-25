import backgroundImage from "../../assets/background.svg";


export default function ResetPassword() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-screen h-screen flex items-center justify-center"
    >
      <div 
      >
        <h1 className="font-montserrat text-[24px] font-bold uppercase tracking-[15px]">Not Found</h1>
      </div>
    </div>
  );
}

