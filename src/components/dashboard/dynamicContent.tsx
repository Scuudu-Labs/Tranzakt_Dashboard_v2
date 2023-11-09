import { useState } from 'react';
import ModalWraper from '../modal';
import DeleteModal from '../modal/deleteModal';

type IProps = {
  header: string;
  content: string;
  openEdit: () => void;
};

const DynamicContent = ({ header, content, openEdit }: IProps) => {
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <div className="flex flex-col pt-2 pb-4 w-full">
      <div className="flex items-center justify-between cursor-pointer">
        <h2 className="font-semibold leading-[16px] tracking-[0.3px] font-montserrat text-shade-200">
          {header}
        </h2>
      </div>
      <div className="pt-6">
        <span className="font-montserrat text-[13px] tracking-[0.3px] text-shade-50">
          {content}
        </span>
        <div className="flex items-center justify-end pt-3">
          <button
            className="text-shade-200 bg-shade-400 w-[80px] mr-4 flex items-center justify-center  py-2 mb-2 mt-2 rounded-md"
            onClick={openEdit}
          >
            Edit
          </button>
          <button
            className="text-white bg-danger-100 w-[80px] flex items-center justify-center  py-2 mb-2 mt-2 rounded-md"
            onClick={() => setDeleteModal(true)}
          >
            Delete
          </button>
        </div>
      </div>
      {deleteModal && (
        <ModalWraper show={deleteModal} close={() => setDeleteModal(false)}>
          <DeleteModal
            text="You are about to to delete this FAQ. Do you want to proceed?"
            action={() => setDeleteModal(false)}
          />
        </ModalWraper>
      )}
    </div>
  );
};

export default DynamicContent;
