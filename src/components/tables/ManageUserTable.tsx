import { Link } from 'react-router-dom';
import StatusTag, { KYCStatusTag } from '../ui/statusTag';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useState } from 'react';
import { Table } from 'antd';
import { useMemo } from 'react';
import { useGetAllUsersQuery } from '../../redux/api/mangerUser';
import { formatDate } from '../../lib/dateFormater';
import { useRef, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import useDebounce from '../hooks';
import { BiSortAlt2 } from 'react-icons/bi';
import SearchInput from '../Input/searchInput';
import SortModal from '../modal/filterByDirection';
import FilterModal from '../modal/filter';
import FilterAccountModal from '../modal/filterAccountStatus';

export default function ManagerUserTable({
  searchValue,
  onChange,
}: {
  searchValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const initialFilter = {
    accountStatus: false,
    sort: false,
    showFilter: false,
  };
  const [filter, setFilter] = useState(initialFilter);

  const filterRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const { search } = useAppSelector((state) => state.query);
  const debouncedValue = useDebounce(searchValue, 500);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const queryData: IQueryString = {
    page: page,
    limit: pageSize,
  };
  if (search.sort_by !== null) {
    queryData['sort_by'] = search.sort_by;
  }

  if (search.role !== null) {
    queryData['role'] = search.role;
  }

  if (search.status !== null) {
    queryData['status'] = search.status;
  }

  if (search.kyc_or_kyb_status !== null) {
    queryData['kyc_or_kyb_status'] = search.kyc_or_kyb_status;
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
          kyc_or_kyb_complete:
            search.role === 'USER' ? user.completed_kyc : user.completed_kyb,
          completed_kyc_at: user.completed_kyc_at,
        };
      }) ?? []
    );
  }, [users]);
  const clickOutside = (e: MouseEvent) => {
    if (filterRef.current?.contains(e.target as Node)) return;
    if (sortRef.current?.contains(e.target as Node)) return;
    if (accountRef.current?.contains(e.target as Node)) return;
    setFilter(initialFilter);
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

    {
      title: 'Verification...',
      dataIndex: 'date',
      key: 'date',
      render: (text: string) => formatDate(text),
    },
    {
      title: () => {
        return (
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setFilter((prev) => ({ ...prev, showFilter: true }))}
          >
            <span>{search.role === 'USER' ? 'KYC Status' : 'KYB Status'}</span>
            <RiArrowDropDownLine size={20} className="text-gray-800" />
          </div>
        );
      },
      dataIndex: 'kyc_or_kyb_complete',
      key: 'kyc_or_kyb_complete',
      render: (text: boolean) => {
        return <KYCStatusTag id={text} text={text ? 'Completed' : 'Pending'} />;
      },
    },

    {
      title: 'Completion',
      dataIndex: 'completed_kyc_at',
      key: 'completed_kyc_at',
      render: (text: string) =>
        text === null ? '-- / -- / --' : formatDate(text),
    },

    {
      title: () => {
        return (
          <div
            className="flex items-center cursor-pointer"
            onClick={() =>
              setFilter((prev) => ({ ...prev, accountStatus: true }))
            }
          >
            <span>Account Sta...</span>
            <RiArrowDropDownLine size={20} className="text-gray-800" />
          </div>
        );
      },
      dataIndex: 'status',
      key: 'status',
      render: (text: string) => (
        <StatusTag
          id={text}
          text={
            text === 'ACTIVE'
              ? 'Activated'
              : text === 'DELETED'
                ? 'Deleted'
                : 'Deactivated'
          }
        />
      ),
    },

    {
      title: '',
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
    <div className="w-full bg-white mb-6 rounded-[16px] rounded-tl-none p-6  border border-[#EAEAEA] min-h-fit">
      {filter.sort && (
        <SortModal
          reference={sortRef}
          close={() => setFilter((prev) => ({ ...prev, sort: false }))}
        />
      )}
      {filter.accountStatus && (
        <FilterModal
          reference={filterRef}
          close={() => setFilter((prev) => ({ ...prev, accountStatus: false }))}
        />
      )}
      {filter.showFilter && (
        <FilterAccountModal
          reference={accountRef}
          close={() => () =>
            setFilter((prev) => ({ ...prev, showFilter: false }))
          }
        />
      )}
      <div className="flex justify-between mb-7 items-center">
        <p className="text-[18px] font-montserrat pb-3 font-semibold">
          KYC Management
        </p>
        <div className="flex items-center">
          <div
            className="flex justify-center border items-center w-[48px] h-[44px] rounded-[6px] border-[#EAEAEA]  text-xs cursor-pointer"
            onClick={() => setFilter((prev) => ({ ...prev, sort: true }))}
          >
            <BiSortAlt2 size={16} />
          </div>

          <SearchInput handleChange={onChange} value={searchValue} />
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
