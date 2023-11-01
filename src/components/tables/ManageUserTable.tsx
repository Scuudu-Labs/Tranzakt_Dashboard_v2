import { Link } from 'react-router-dom';
import { SortIcon } from '../../assets';
import StatusTag from '../ui/statusTag';
import IconWrap from '../ui/svgWrapper';
import { useState } from 'react';
import { Table } from 'antd';
import { useMemo } from 'react';
import { useGetAllUsersQuery } from '../../redux/api/mangerUser';
import { formatDate } from '../../lib/dateFormater';
import FilterModal from '../modals/filterByDirection';
import { useRef, useEffect } from 'react';
import { useAppSelector } from '../../redux/hooks';

export default function ManagerUserTable() {
  const filterRef = useRef<HTMLDivElement>(null);
  const { search } = useAppSelector((state) => state.query);
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(false);
  const queryData: IUserQuery = {
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
    queryData['search_txt'] = search.search_txt;
  }

  const { data: users, isLoading } = useGetAllUsersQuery(queryData);

  const dataSource = useMemo(() => {
    return (
      users?.data?.map((user, index) => {
        return {
          sn: `#0${index + 1 < 10 ? `0${index + 1}` : index + 1} `,
          name: user.full_name,
          status: user.status,
          date: user.date,
          index: user.user_id,
        };
      }) ?? []
    );
  }, [users]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clickOutside = (e: any) => {
    if (filterRef.current?.contains(e.target)) return;
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
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: string) => (
        <StatusTag
          id={text}
          text={text === 'ACTIVE' ? 'Completed' : 'Deactivated'}
        />
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
      dataIndex: 'view',
      key: 'index',
      render: (index: number) => (
        <Link
          to={`/manageuser/${index}`}
          className="py-4 text-[#32C87D] font-montserrat underline font-bold"
        >
          view
        </Link>
      ),
    },
  ];

  return (
    <div className="w-full bg-white my-6 rounded-[16px] p-6  border border-[#EAEAEA] min-h-[72vh]">
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
        {sort && <FilterModal reference={filterRef} />}
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={isLoading}
        pagination={{
          defaultCurrent: 1,
          showSizeChanger: true,
          onShowSizeChange: (_current, size) => {
            setPage(1);
            setPageSize(size);
          },
          total: users?.data?.length ?? 0,
          pageSize: pageSize,
          onChange: (page) => {
            setPage(page);
          },
        }}
      />
    </div>
  );
}
