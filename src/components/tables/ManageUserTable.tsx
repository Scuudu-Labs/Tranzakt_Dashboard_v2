import { Link } from 'react-router-dom';
import { DeletedStatusTag, KYCStatusTag } from '../ui/statusTag';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useState } from 'react';
import { Table } from 'antd';
import { useMemo } from 'react';
import { useGetAllUsersQuery } from '../../redux/api/mangerUser';
import { formatDate } from '../../lib/dateFormater';
import { useRef, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import useDebounce from '../hooks';
import { PiFunnelLight } from 'react-icons/pi';
import { BiSortAlt2 } from 'react-icons/bi';
import SearchInput from '../Input/searchInput';
import SortModal from '../modal/filterByDirection';
import FilterModal from '../modal/filter';
import DeleteCard from '../modal/deleteCard';

export default function ManagerUserTable({
  searchValue,
  onChange,
}: {
  searchValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const filterRef = useRef<HTMLDivElement>(null);
  const deleteRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const { search } = useAppSelector((state) => state.query);
  const [showFilter, setShowFilter] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const debouncedValue = useDebounce(searchValue, 500);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(false);
  const queryData: IQueryString = {
    page: page,
    limit: pageSize,
  };
  if (search.sort_by !== null) {
    queryData['sort_by'] = search.sort_by;
  }

  if (search.status !== null) {
    queryData['status'] = search.status;
  }

  if (search.is_deleted !== null) {
    queryData['is_deleted'] = search.is_deleted;
  }

  if (search.search_txt !== null) {
    queryData['search_txt'] = debouncedValue;
  }

  const { data: users, isLoading } = useGetAllUsersQuery(queryData);
  const dataSource = useMemo(() => {
    return (
      users?.data?.users?.map((user, index) => {
        return {
          sn: `#0${index + 1 < 10 ? `0${index + 1}` : index + 1} `,
          name: user.full_name,
          status: user.status,
          is_deleted: user.is_deleted,
          date: user.date,
          index: user.user_id,
          kyc_complete: user.completed_kyc,
          completed_kyc_at: user.completed_kyc_at,
        };
      }) ?? []
    );
  }, [users]);
  const clickOutside = (e: MouseEvent) => {
    if (filterRef.current?.contains(e.target as Node)) return;
    if (sortRef.current?.contains(e.target as Node)) return;
    if (deleteRef.current?.contains(e.target as Node)) return;

    setSort(false);
    setShowFilter(false);
    setDeleted(false);
  };

  useEffect(() => {
    window.addEventListener('mousedown', clickOutside);
    return () => window.removeEventListener('mousedown', clickOutside);
  }, []);

  const columns = [
    {
      title: 'S/N',
      dataIndex: 'sn',
      key: 'S/N',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    // {
    //   title: 'User Status',
    //   dataIndex: 'status',
    //   key: 'status',
    //   render: (text: string) => (
    //     <StatusTag
    //       id={text}
    //       text={
    //         text === 'ACTIVE'
    //           ? 'Activated'
    //           : text === 'DELETED'
    //             ? 'Deleted'
    //             : 'Deactivated'
    //       }
    //     />
    //   ),
    // },
    {
      title: 'Verification',
      dataIndex: 'date',
      key: 'date',
      render: (text: string) => formatDate(text),
    },
    {
      title: 'KYC Status',
      dataIndex: 'kyc_complete',
      key: 'status',
      render: (text: boolean) => (
        <KYCStatusTag id={text} text={text ? 'Completed' : 'Pending'} />
      ),
    },

    {
      title: 'Completion',
      dataIndex: 'completed_kyc_at',
      key: 'completed_kyc_at',
      render: (text: string) =>
        text === null ? '-- / -- / --' : formatDate(text),
    },
    {
      title: 'Deleted',
      dataIndex: 'is_deleted',
      key: 'is_deleted',
      render: (value: boolean) => (
        <DeletedStatusTag id={value} text={value === true ? 'True' : 'False'} />
      ),
    },

    {
      title: 'View',
      dataIndex: 'index',
      key: 'index',
      render: (index: number) => (
        <Link
          to={`/manageuser/${index}`}
          className="py-4 text-[#32C87D] font-montserrat underline font-bold"
        >
          View
        </Link>
      ),
    },
  ];

  return (
    <div className="w-full bg-white my-6 rounded-[16px] p-6  border border-[#EAEAEA] min-h-fit">
      {sort && <SortModal reference={sortRef} close={() => setSort(false)} />}
      {showFilter && (
        <FilterModal reference={filterRef} close={() => setShowFilter(false)} />
      )}
      {deleted && (
        <DeleteCard reference={deleteRef} close={() => setDeleted(false)} />
      )}
      <div className="flex justify-between mb-7 items-center">
        <p className="text-[18px] font-montserrat pb-3 font-semibold">
          KYC Management
        </p>
        <div className="flex items-center">
          <div
            className="flex justify-center mr-2 border items-center w-[48px] h-[44px] rounded-[6px] border-[#EAEAEA] gap-x-1 text-xs cursor-pointer"
            onClick={() => setSort(!sort)}
          >
            <BiSortAlt2 size={16} />
          </div>
          <div
            className="flex justify-center  mr-2 border items-center w-[48px] h-[44px] rounded-[6px] border-[#EAEAEA] gap-x-1 text-xs cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          >
            <PiFunnelLight size={16} />
          </div>
          <SearchInput handleChange={onChange} value={searchValue} />
          <button
            className={`border text-[14px] h-[44px] justify-center rounded-[8px] ${
              search.is_deleted
                ? 'bg-[#32C87D] text-white'
                : ' border-[#EAEAEA] text-[#3F3F3F]'
            }  w-[184px] flex items-center`}
            onClick={() => setDeleted(!deleted)}
          >
            Deleted Account
            <RiArrowDropDownLine
              size={22}
              color={search.is_deleted ? '#fff' : '#000'}
            />
          </button>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        locale={{
          emptyText: 'RESULTS NOT FOUND',
        }}
        loading={isLoading}
        pagination={{
          defaultCurrent: 1,
          showSizeChanger: true,
          onShowSizeChange: (_current, size) => {
            setPage(1);
            setPageSize(size);
          },
          total: users?.data?.meta?.count,
          pageSize: pageSize,
          onChange: (page) => {
            setPage(page);
          },
        }}
      />
    </div>
  );
}
