import { ReactComponent as SortIcon } from "../../assets/icons/sort.svg";

interface MangageUserTableData {
  sn: string;
  name: string;
  status: string;
  date: string;
}

const StatusTag = ({text}: {text:string}) => {
  const style = text === "completed" ? "text-[#32C87D] bg-[#EBF9F2]" : text === "pending" ? "text-[#F5A122] bg-[#FFF0D2]" :   "text-[#FF2636] bg-[#FFE8E8]"
  return (
    <button className={`capitalize px-[12px] py-[4px] rounded-[12px] text-[12px] ${style}`}>{text}</button>
  )
}

export default function ManagerUserTable(props: {
  data: MangageUserTableData[];
}) {
  return (
    <div className="w-full bg-white my-6 rounded-[16px] p-6  border border-[#EAEAEA] h-[72vh]">
      <div className="flex justify-between items-center">
        <p className="text-[18px] font-montserrat pb-3 font-semibold">KYC Management</p>
        <div className="flex justify-center items-center gap-x-1 text-xs cursor-pointer">
          <p className="font-montserrat text-[12px] mr-1 text-[#3F3F3F]">Sort by</p>
          <SortIcon />
        </div>
      </div>
      <table className="w-full my-4 ">
        <tr className="text-[#2B2B2B] border-b border-[#E3E3E3] font-semibold">
          <td className="py-4">S/N</td>
          <td className="py-4">Name</td>
          <td className="py-4">Status</td>
          <td className="py-4">Date</td>
          <td></td>
        </tr>
        {props.data.map((user) => (
          <tr className="border-b border-[#E3E3E3]">
            <td className="py-4 pr-3">{user.sn}</td>
            <td className="py-4">{user.name}</td>
            <td className="py-4"><StatusTag text={user.status} /></td>
            <td className="py-4">{user.date}</td>
            <td className="py-4 text-[#32C87D] underline font-bold">view</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
