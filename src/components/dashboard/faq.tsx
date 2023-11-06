import { useState } from 'react';
import IconWrap from '../ui/svgWrapper';
import { ArrowDown, ArrowUp } from '../../assets';
import ModalWraper from '../modal';
import FaqCard from '../modal/faqCard';
import DeleteModal from '../modal/deleteModal';
type IFaq = {
  question: string;
  answer: string;
};

const Faq = ({ question, answer }: IFaq) => {
  const [open, setOpen] = useState({
    create: false,
    edit: false,
    delete: false,
  });
  const toggle = () => setOpen({ ...open, create: !open.create });
  const openEdit = () => setOpen({ ...open, edit: true });
  const closeEdit = () => setOpen({ ...open, edit: false });
  const openDelete = () => setOpen({ ...open, delete: true });
  const closeDelete = () => setOpen({ ...open, delete: false });

  return (
    <div className="flex flex-col py-6 w-full border-b  border-shade-300">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggle}
      >
        <h2 className="font-semibold leading-[16px] tracking-[0.3px] font-montserrat text-shade-200">
          {question}
        </h2>
        {open.create ? (
          <IconWrap src={ArrowUp} />
        ) : (
          <IconWrap src={ArrowDown} />
        )}
      </div>
      {open.create && (
        <div className="pt-2">
          <span className="font-montserrat text-[13px] tracking-[0.3px] text-shade-50">
            {answer}
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
              onClick={openDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
      {open.edit && (
        <ModalWraper show={open.edit} close={closeEdit}>
          <FaqCard close={closeEdit} />
        </ModalWraper>
      )}
      {open.delete && (
        <ModalWraper show={open.delete} close={closeDelete}>
          <DeleteModal
            text="You are about to to delete this FAQ. Do you want to proceed?"
            close={closeDelete}
          />
        </ModalWraper>
      )}
    </div>
  );
};

export default Faq;
