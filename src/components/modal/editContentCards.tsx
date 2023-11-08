import { closeIcon } from '../../assets';
import TextArea from '../Input/TextArea';
import TextInput from '../Input/TextInput';
import IconWrap from '../ui/svgWrapper';

type IProps = {
  header: string;
  close: () => void;
};

const EditContentCards = ({ header, close }: IProps) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    close();
  };
  return (
    <div className="w-[500px] h-[480px]  p-8 rounded-[12px] bg-white ">
      <div className="flex items-center mb-4 justify-between">
        <h2 className="text-[18px] font-montserrat pb-3 font-semibold">
          {header}
        </h2>
        <IconWrap src={closeIcon} style="cursor-pointer" close={close} />
      </div>
      <form
        className="flex flex-col h-full items-center w-full"
        onSubmit={handleSubmit}
      >
        <TextInput error="" label="Title" placeholder="Enter Title" />
        <TextArea
          error=""
          label="Description"
          placeholder="Enter Description"
        />
        <button className="text-white bg-[#32C87D] w-full flex items-center justify-center mx-auto py-3 mb-2 mt-5 rounded-md">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditContentCards;
