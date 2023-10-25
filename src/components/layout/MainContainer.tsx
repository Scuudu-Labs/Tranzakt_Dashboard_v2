import { ReactNode } from "react";
import LeftNavbar from "../nav/LeftNav";
import TopNavbar from "../nav/TopNav";

export default function MainContainer(props: { children: ReactNode }) {
  return (
    <div className="">
      <TopNavbar />
      <div className="flex w-full">
        <LeftNavbar />
        <div className="min-h-screen bg-[#EEEEEE] w-[85%] pt-6 px-5">
          {props.children}
        </div>
      </div>
    </div>
  );
}
