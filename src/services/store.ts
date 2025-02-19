import { configureStore, combineSlices } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

import {
  ingredientsSlice,
  burgerConstructorSlice,
  userSlice,
  ordersSlice,
  feedsSlice
} from './slices';

export const rootReducer = combineSlices(
  ingredientsSlice,
  burgerConstructorSlice,
  userSlice,
  ordersSlice,
  feedsSlice
);

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
