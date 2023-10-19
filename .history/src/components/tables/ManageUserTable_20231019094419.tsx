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
    <div className="w-full bg-white my-6 rounded-[16px] py-4 px-6 border border-[#EAEAEA] h-[72vh]">
      <div className="flex justify-between mx-2 my-5">
        <p>KYC Management</p>
        <div className="flex justify-center items-center gap-x-1 text-xs cursor-pointer">
          <p>Sort by</p>
          <SortIcon />
        </div>
      </div>
      <table className="w-full table-auto">
        <tr className="text-[#2B2B2B] border-b border-[#E3E3E3] ">
          <td>S/N</td>
          <td>Name</td>
          <td>Status</td>
          <td>Date</td>
          <td></td>
        </tr>
        {props.data.map((user) => (
          <tr className="border-b border-[#E3E3E3] py-5">
            <td>{user.sn}</td>
            <td>{user.name}</td>
            <td></td>
            <td>{user.date}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
