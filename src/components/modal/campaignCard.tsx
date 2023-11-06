import IconWrap from '../ui/svgWrapper';
import { closeIcon } from '../../assets';
import TextInput from '../Input/TextInput';

const CampaignCard = ({ close }: { close: () => void }) => {
  return (
    <div className="w-[500px] h-[550px]  p-8 rounded-[12px] bg-white ">
      <div className="flex items-center mb-4 justify-between">
        <h2 className="text-[18px] font-montserrat pb-3 font-semibold">
          Campaign Details
        </h2>
        <IconWrap src={closeIcon} style="cursor-pointer" close={close} />
      </div>
      <form className="flex flex-col h-[450px] overflow-y-auto items-center w-full">
        <TextInput error="" label="Campaign Title" placeholder="Enter title" />
        <TextInput
          error=""
          label="Link CTA Title"
          placeholder="Enter link title"
        />
        <TextInput error="" label="Link URL" placeholder="https://abcdefghij" />
        <TextInput
          error=""
          label="Start Date"
          type="date"
          placeholder="24/08/2023"
        />
        <TextInput
          error=""
          label="End Date"
          type="date"
          placeholder="24/08/2023"
        />
      </form>
    </div>
  );
};

export default CampaignCard;
