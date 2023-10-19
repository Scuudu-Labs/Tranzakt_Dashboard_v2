import { ReactComponent as SortIcon } from "../../assets/icons/sort.svg";

interface MangageUserTableData {
  sn: string;
  name: string;
  status: string;
  date: string;
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
      <table className="w-full my-4 table-auto">
        <tr className="text-[#2B2B2B] border-b border-[#E3E3E3] font-semibold">
          <td className="py-4">S/N</td>
          <td className="py-4">Name</td>
          <td className="py-4">Status</td>
          <td className="py-4">Date</td>
          <td></td>
        </tr>
        {props.data.map((user) => (
          <tr className="border-b border-[#E3E3E3]">
            <td className="py-4">{user.sn}</td>
            <td className="py-4">{user.name}</td>
            <td className="py-4">{user.status}</td>
            <td className="py-4">{user.date}</td>
            <td className="py-4">view</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
