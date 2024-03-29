import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ISearch = {
  search: {
    status: '',
    sort_by: '',
    kyc_or_kyb_status: null,
    role: 'USER',
  },
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setSearch: (state: ISearch, action: PayloadAction<IQuerySearch>) => {
      state.search = { ...state.search, ...action.payload };
      return state;
    },
  },
});

export const { setSearch } = querySlice.actions;

export default querySlice.reducer;
