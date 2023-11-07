import { useMemo, useState } from 'react';
import { useGetAllCampaignsQuery } from '../../redux/api/campaign';
import { formatDate } from '../../lib/dateFormater';
import { Table } from 'antd';
import StatusTag from '../ui/statusTag';
import IconWrap from '../ui/svgWrapper';
import { DeleteIcon, EditIcon } from '../../assets';
import { Link } from 'react-router-dom';

const CampaignTable = () => {
  const { data: campaigns, isLoading } = useGetAllCampaignsQuery();
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1);
  console.log(page);
  const dataSource = useMemo(() => {
    return campaigns?.data?.map((campaign) => {
      const duration = `${formatDate(campaign.starts_at)} - ${formatDate(
        campaign.ends_at
      )}`;
      return {
        id: campaign.id,
        title: campaign.title,
        duration: duration,
        status: 'active',
        impression: 40,
      };
    });
  }, [campaigns]);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },

    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: string) => (
        <StatusTag
          id={text.toUpperCase()}
          text={text === 'active' ? 'Active' : 'in-active'}
        />
      ),
    },
    {
      title: 'Impression',
      dataIndex: 'impression',
      key: 'impression',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
    },

    {
      title: 'Action',
      dataIndex: 'action',
      key: 'id',
      render: () => (
        <div className="flex items-center">
          <IconWrap src={EditIcon} style="mr-8 cursor-pointer" />
          <IconWrap src={DeleteIcon} style="cursor-pointer" />
        </div>
      ),
    },

    {
      title: '',
      dataIndex: 'view',
      key: 'index',
      render: (index: number) => (
        <Link
          to={`/campaign/${index}`}
          className="py-4 text-[#32C87D] hover:text-[#32C87D] px-8 font-montserrat underline font-bold"
        >
          View
        </Link>
      ),
    },
  ];

  return (
    <div className="mt-3">
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
          total: 3,
          pageSize: pageSize,
          onChange: (page) => {
            setPage(page);
          },
        }}
      />
      ;
    </div>
  );
};

export default CampaignTable;
