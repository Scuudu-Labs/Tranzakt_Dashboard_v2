import { useMemo, useState } from 'react';
import { formatDate } from '../../lib/dateFormater';
import { ConfigProvider, Table } from 'antd';
import StatusTag from '../ui/statusTag';
import IconWrap from '../ui/svgWrapper';
import { DeleteIcon, EditIcon } from '../../assets';
import ModalWraper from '../modal';
import CampaignCard from '../modal/campaignCard';
import DeleteModal from '../modal/deleteModal';
import EmptyStateContainer from '../dashboard/emptyState';

type IProps = {
  campaigns: ISuccessResponse<ICampaign[]> | undefined;
  isLoading: boolean;
  open: () => void;
};

const CampaignTable = ({ campaigns, isLoading, open }: IProps) => {
  const [pageSize, setPageSize] = useState(5);
  const [, setPage] = useState(1);
  const [id, setId] = useState('');
  const [action, setAction] = useState({
    view: false,
    edit: false,
    delete: false,
  });
  const viewAction = (id: string) => {
    setAction({ ...action, view: true });
    setId(id);
  };
  const editAction = (id: string) => {
    setAction({ ...action, edit: true });
    setId(id);
  };

  const deleteAction = (id: string) => {
    setAction({ ...action, delete: true });
    setId(id);
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
        cta_title: campaign.cta_title,
        cta_url: campaign.cta_url,
        ends_at: campaign.ends_at,
        starts_at: campaign.starts_at,
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
      dataIndex: 'id',
      key: 'id',
      render: (key: string) => (
        <div className="flex gap-x-8 items-center">
          <IconWrap
            src={EditIcon}
            style="cursor-pointer"
            click={() => editAction(key)}
          />
          <IconWrap
            src={DeleteIcon}
            style="cursor-pointer"
            click={() => deleteAction(key)}
          />
        </div>
      ),
    },

    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (key: string) => (
        <span
          onClick={() => viewAction(key)}
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
          <CampaignCard
            id={id}
            close={() => setAction({ ...action, edit: false })}
          />
        </ModalWraper>
      )}
      {action.view && (
        <ModalWraper
          show={action.view}
          close={() => setAction({ ...action, view: false })}
        >
          <CampaignCard
            id={id}
            close={() => setAction({ ...action, view: false })}
            view
          />
        </ModalWraper>
      )}
      {action.delete && (
        <ModalWraper
          show={action.delete}
          close={() => setAction({ ...action, delete: false })}
        >
          <DeleteModal
            id={id}
            text="You are about to to delete this advert. Do you want to proceed?"
            action={() => setAction({ ...action, delete: false })}
          />
        </ModalWraper>
      )}
      <ConfigProvider renderEmpty={() => <EmptyStateContainer open={open} />}>
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
            total: campaigns?.data?.length,
            pageSize: pageSize,
            onChange: (page) => {
              setPage(page);
            },
          }}
        />
      </ConfigProvider>
    </div>
  );
};

export default CampaignTable;
