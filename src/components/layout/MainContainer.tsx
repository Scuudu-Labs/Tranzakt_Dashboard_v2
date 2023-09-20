import { ReactNode } from "react";
import LeftNavbar from "../nav/LeftNav";
import TopNavbar from "../nav/TopNav";

export default function MainContainer(props: { children: ReactNode }) {
  return (
    <div className="h-screen w-screen">
      <TopNavbar />
      <div className="h-[88%] flex w-full overflow-x-scroll">
        <LeftNavbar />
        <div className="h-full bg-[#EEEEEE] w-[85%] pt-6 px-5">
          {props.children}
        </div>
      </div>
    </div>
  );
}
