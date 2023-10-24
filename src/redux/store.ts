/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Reducer } from 'redux';

const reducers = {

}

const combinedReducer:Reducer = combineReducers<typeof reducers>(reducers)

export const store = configureStore({
    reducer: combinedReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat([]),
    devTools: process.env.NODE_ENV !== 'production'   
})

export type Store = ReturnType<any>;
export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;