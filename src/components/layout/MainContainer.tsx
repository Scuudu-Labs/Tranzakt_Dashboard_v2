import { ReactNode } from 'react';
import LeftNavbar from '../nav/LeftNav';
import TopNavbar from '../nav/TopNav';

export default function MainContainer(props: { children: ReactNode }) {
  return (
    <div className="">
      <TopNavbar />
      <div className="flex w-full">
        <LeftNavbar />
        <div className="min-h-screen ml-[210px] bg-[#EEEEEE] w-full pt-6 px-7">
          {props.children}
        </div>
      </div>
    </div>
  );
}
