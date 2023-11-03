import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Reducer } from 'redux';
import { authReducer, queryReducer } from './slice';
import { getPreloadedState } from './getPreloadedState';
import axios from 'axios';
import { setUser } from './slice/auth';
import { baseApi } from './api/baseApi';

const reducers = {
  api: baseApi.reducer,
  auth: authReducer.default,
  query: queryReducer.default,
};

const combinedReducer: Reducer = combineReducers<typeof reducers>(reducers);

export const store = configureStore({
  preloadedState: getPreloadedState(),
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response && error?.response.status === 401) {
      store.dispatch(setUser(null));
    }
    return Promise.reject(error);
  }
);
