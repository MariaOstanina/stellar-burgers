import { getOrdersApi, getOrderByNumberApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

type OrdersState = {
  data: TOrder[];
  ordersByNumber: TOrder[];
};

const initialState: OrdersState = {
  data: [],
  ordersByNumber: []
};

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
    ordersDataSelector: (state) => state.data,
    ordersByNumberSelector: (state) => state.ordersByNumber
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getOrderByNumber.fulfilled, (state, action) => {
        state.ordersByNumber = action.payload.orders;
      });
  }
});

export const { ordersDataSelector, ordersByNumberSelector } =
  ordersSlice.selectors;
