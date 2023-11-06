import IconWrap from '../ui/svgWrapper';
import { Danger } from '../../assets';

const DeleteModal = ({ text, close }: { text: string; close: () => void }) => {
  return (
    <div className="flex items-center justify-center w-[448px] h-[323px] flex-col rounded-[8px] p-[32px] bg-white">
      <IconWrap src={Danger} style="mb-4" />
      <h2 className="text-[24px] font-semibold pt-4 pb-2 leading-[29px] text-shade-500 ">
        Warning!
      </h2>
      <span className="text-[16px] text-shade-500 text-center">{text}</span>
      <button
        className="text-white bg-danger-100 w-full flex items-center justify-center mx-auto py-3 mb-2 mt-5 rounded-md"
        onClick={close}
      >
        Proceed
      </button>
    </div>
  );
};

export default DeleteModal;