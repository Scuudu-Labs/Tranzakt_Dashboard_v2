import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AdminSlice = {
  user: null,
  access_token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state: AdminSlice, action: PayloadAction<string>) => {
      state.access_token = action.payload;
      localStorage.setItem('adminToken', JSON.stringify(state.access_token));
      return state;
    },

    setUser: (state: AdminSlice, action: PayloadAction<IAdmin | null>) => {
      if (action.payload) {
        state.user = action.payload;
        localStorage.setItem('adminInfo', JSON.stringify(state.user));
      } else {
        state = initialState;
        localStorage.clear();
      }
    },
  },
});

export const { setUser, setToken } = authSlice.actions;

export default authSlice.reducer;
