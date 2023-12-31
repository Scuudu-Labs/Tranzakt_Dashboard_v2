import { Link } from 'react-router-dom';
import { SortIcon } from '../../assets';
import StatusTag, { KYCStatusTag } from '../ui/statusTag';
import IconWrap from '../ui/svgWrapper';
import { useState } from 'react';
import { Table } from 'antd';
import { useMemo } from 'react';
import { useGetAllUsersQuery } from '../../redux/api/mangerUser';
import { formatDate } from '../../lib/dateFormater';
import FilterModal from '../modal/filterByDirection';
import { useRef, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';
import useDebounce from '../hooks';

export default function ManagerUserTable({
  searchValue,
}: {
  searchValue: string;
}) {
  const filterRef = useRef<HTMLDivElement>(null);
  const { search } = useAppSelector((state) => state.query);
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
          date: user.date,
          index: user.user_id,
          kyc_complete: user.completed_kyc,
        };
      }) ?? []
    );
  }, [users]);

  const clickOutside = (e: MouseEvent) => {
    if (filterRef.current?.contains(e.target as Node)) return;
    setSort(false);
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
      title: 'User Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: string) => (
        <StatusTag
          id={text}
          text={text === 'ACTIVE' ? 'Activated' : 'Deactivated'}
        />
      ),
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
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text: string) => formatDate(text),
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
      <div className="flex justify-between items-center">
        <p className="text-[18px] font-montserrat pb-3 font-semibold">
          KYC Management
        </p>
        <div
          className="flex justify-center items-center gap-x-1 text-xs cursor-pointer"
          onClick={() => setSort(!sort)}
        >
          <p className="font-montserrat text-[14px] mr-1 text-[#3F3F3F]">
            Sort by
          </p>
          <IconWrap src={SortIcon} />
        </div>
        {sort && (
          <FilterModal reference={filterRef} close={() => setSort(false)} />
        )}
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
