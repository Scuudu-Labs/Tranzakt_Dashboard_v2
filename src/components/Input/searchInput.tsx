import { SearchIcon } from '../../assets';
import IconWrap from '../../components/ui/svgWrapper';

type IProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const SearchInput = ({ handleChange, value }: IProps) => {
  return (
    <div className="w-[400px] ml-3 h-[48px] flex items-center relative  ">
      <input
        type="text"
        name="search"
        value={value}
        autoFocus={true}
        autoComplete="off"
        onChange={handleChange}
        className="h-[48px] text-[#3F3F3F] text-[14px] font-montserrat focus:outline-none rounded-[8px] border border-r-0 border-[#EAEAEA] rounded-r-none w-[85%] px-[16px]"
        placeholder="Search"
      />
      <div className="border bg-white border-[#EAEAEA]  rounded-[8px]  rounded-l-none   flex items-center justify-center w-[15%] h-[48px]">
        <IconWrap src={SearchIcon} style="w-[16px]" />
      </div>
    </div>
  );
};

export default SearchInput;
