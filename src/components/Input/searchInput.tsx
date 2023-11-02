import { SearchIcon } from '../../assets';
import IconWrap from '../../components/ui/svgWrapper';

type IProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const SearchInput = ({ handleChange, value }: IProps) => {
  return (
    <div className="w-[600px] h-[48px] flex items-center relative  ">
      <input
        type="text"
        name="search"
        value={value}
        onChange={handleChange}
        className="h-[48px] text-[#3F3F3F] font-montserrat focus:outline-none rounded-[8px] rounded-r-none w-[90%] px-[16px]"
        placeholder="Search"
      />
      <div className="border bg-white border-[#EAEAEA]  rounded-[8px]  rounded-l-none   flex items-center justify-center w-[10%] h-[48px]">
        <IconWrap src={SearchIcon} />
      </div>
    </div>
  );
};

export default SearchInput;
