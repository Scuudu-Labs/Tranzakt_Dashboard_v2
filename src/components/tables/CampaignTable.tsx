import { useMemo, useState } from 'react';
import { formatDate } from '../../lib/dateFormater';
import { Table } from 'antd';
import StatusTag from '../ui/statusTag';
import IconWrap from '../ui/svgWrapper';
import { DeleteIcon, EditIcon } from '../../assets';
import ModalWraper from '../modal';
import CampaignCard from '../modal/campaignCard';
import DeleteModal from '../modal/deleteModal';

type IProps = {
  campaigns: ISuccessResponse<ICampaign[]>;
  isLoading: boolean;
};

const CampaignTable = ({ campaigns, isLoading }: IProps) => {
  const [pageSize, setPageSize] = useState(5);
  const [, setPage] = useState(1);
  const [action, setAction] = useState({
    view: false,
    edit: false,
    delete: false,
  });
  const viewAction = () => {
    setAction({ ...action, view: true });
  };
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
        <div className="flex gap-x-8 items-center">
          <IconWrap
            src={EditIcon}
            style="cursor-pointer"
            click={() => setAction({ ...action, edit: true })}
          />
          <IconWrap
            src={DeleteIcon}
            style="cursor-pointer"
            click={() => setAction({ ...action, delete: true })}
          />
        </div>
      ),
    },

    {
      title: '',
      dataIndex: 'view',
      key: 'index',
      render: () => (
        <span
          onClick={() => viewAction()}
          className="py-4 text-[#32C87D] hover:text-[#32C87D] cursor-pointer px-8 font-montserrat underline font-bold"
        >
          View
        </span>
      ),
    },
  ];

  return (
    <div className="mt-3">
      {action.edit && (
        <ModalWraper
          show={action.edit}
          close={() => setAction({ ...action, edit: false })}
        >
          <CampaignCard close={() => setAction({ ...action, edit: false })} />
        </ModalWraper>
      )}
      {action.view && (
        <ModalWraper
          show={action.view}
          close={() => setAction({ ...action, view: false })}
        >
          <CampaignCard close={() => setAction({ ...action, view: false })} />
        </ModalWraper>
      )}
      {action.delete && (
        <ModalWraper
          show={action.delete}
          close={() => setAction({ ...action, delete: false })}
        >
          <DeleteModal
            text="You are about to to delete this advert. Do you want to proceed?"
            action={() => setAction({ ...action, delete: false })}
          />
        </ModalWraper>
      )}
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
