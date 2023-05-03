import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { combineReducers } from 'redux';
import {repositorySlice, searchSlice} from './slices';

const reducers = combineReducers({
  repositories: repositorySlice,
  search: searchSlice,
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.REACT_APP_NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
