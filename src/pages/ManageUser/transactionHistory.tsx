import { useMemo, useState } from 'react';
import { Table } from 'antd';
import { formatDate } from '../../lib/dateFormater';

const TransactionHistory = ({
  transactions,
  loading,
}: {
  transactions: ITxnData | undefined;
  loading: boolean;
}) => {
  const [pageSize, setPageSize] = useState(5);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setPage] = useState(1);

  const columns = [
    {
      title: 'Account Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Transaction ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      render: (amount: string, data: { type: string }) => {
        return (
          <span
            className={`font-montserrat capitalize tracking-[0.2px] text-[14px] ${
              data.type === 'TRANSFER' ? 'text-[#32C87D]' : 'text-[#FF2636] '
            }`}
          >
            {data.type === 'TRANSFER' ? '+' : '-'} {amount}
          </span>
        );
      },
    },
    {
      title: 'Transaction Type',
      dataIndex: 'type',
      render: (type: string) => {
        return (
          <span className="font-montserrat capitalize tracking-[0.2px] text-[14px]">
            {type}
          </span>
        );
      },
    },
    {
      title: 'Date',
      dataIndex: 'date',
      render: (date: string) => {
        return (
          <div className="flex flex-col">
            <span className="font-montserrat tracking-[0.2px] text-[14px]">
              {date.split('|')[0]}
            </span>
            <span className="font-montserrat text-[#A1A1A1] tracking-[0.2px] text-[14px]">
              At {date.split('|')[1]}
            </span>
          </div>
        );
      },
    },
  ];

  const dataSource = useMemo(() => {
    return (
      transactions?.data?.map((txn) => {
        console.log(txn.purpose);
        return {
          id: txn.reference,
          name: `${txn.entity.first_name} ${txn.entity.last_name}`,
          date: formatDate(txn.created_at),
          type: txn.purpose,
          amount: `₦${new Intl.NumberFormat('en-NG').format(txn.amount ?? 0)}`,
        };
      }) ?? []
    );
  }, [transactions]);

  return (
    <div className="w-full">
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        pagination={{
          defaultCurrent: 1,
          showSizeChanger: true,
          onShowSizeChange: (_current, size) => {
            setPage(1);
            setPageSize(size);
          },
          total: transactions?.pagination?.totalCount,
          pageSize: pageSize,
          onChange: (page) => {
            setPage(page);
          },
        }}
      />
    </div>
  );
};

export default TransactionHistory;
