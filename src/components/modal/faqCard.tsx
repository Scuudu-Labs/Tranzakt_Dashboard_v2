import { closeIcon } from '../../assets';
import TextInput from '../Input/TextInput';
import TextArea from '../Input/TextArea';
import IconWrap from '../ui/svgWrapper';

const FaqCard = ({ close }: { close: () => void }) => {
  return (
    <div className="w-[500px] h-[480px]  p-8 rounded-[12px] bg-white ">
      <div className="flex items-center mb-4 justify-between">
        <h2 className="text-[18px] font-montserrat pb-3 font-semibold">
          FAQ Details
        </h2>
        <IconWrap src={closeIcon} style="cursor-pointer" close={close} />
      </div>
      <form className="flex flex-col  overflow-y-auto items-center w-full">
        <TextInput error="" label="Title" placeholder="Enter question" />
        <TextArea error="" label="Description" placeholder="Enter Answer" />
        <button className="text-white bg-[#32C87D] w-full flex items-center justify-center mx-auto py-3 mb-2 mt-5 rounded-md">
          Save FAQ
        </button>
      </form>
    </div>
  );
};

export default FaqCard;
