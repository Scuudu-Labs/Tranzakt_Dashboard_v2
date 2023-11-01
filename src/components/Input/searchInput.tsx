import React, { useState, useCallback, useEffect } from 'react';
import { SearchIcon } from '../../assets';
import IconWrap from '../../components/ui/svgWrapper';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearch } from '../../redux/slice/querySearch';
import useDebounce from '../hooks';
const SearchInput = () => {
  const [value, setValue] = useState('');
  const { search } = useAppSelector((state) => state.query);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const debouncedValue = useDebounce(value, 500);

  const searchedValue = useCallback(() => {
    dispatch(setSearch({ ...search, search_txt: debouncedValue }));
  }, [debouncedValue]);

  useEffect(() => {
    searchedValue();
  }, [debouncedValue, value]);

  return (
    <div className="w-[600px] h-[48px] flex items-center relative  ">
      <input
        type="text"
        name="search"
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
