/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Reducer } from 'redux';
import { authAPi } from './api/auth';
import { authReducer } from './slice'
import { getPreloadedState } from './getPreloadedState';

const reducers = {
    auth: authReducer.default,
    [authAPi.reducerPath]: authAPi.reducer
}

const combinedReducer:Reducer = combineReducers<typeof reducers>(reducers)

export const store = configureStore({
    preloadedState: getPreloadedState(),
    reducer: combinedReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat([
            authAPi.middleware
        ]),
    devTools: process.env.NODE_ENV !== 'production'   
})

export type Store = ReturnType<any>;
export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;