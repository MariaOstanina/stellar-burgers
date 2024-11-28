import { getOrdersApi, getOrderByNumberApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

type OrdersState = {
  data: TOrder[];
};

const initialState: OrdersState = { data: [] };

export const fetchOrders = createAsyncThunk('fetchOrders', getOrdersApi);

export const getOrderByNumber = createAsyncThunk(
  'getOrderByNumber',
  getOrderByNumberApi
);

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  selectors: {
    ordersDataSelector: (state) => state.data
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getOrderByNumber.fulfilled, (state, action) => {
        state.data = action.payload.orders;
      });
  }
});

export const { ordersDataSelector } = ordersSlice.selectors;
