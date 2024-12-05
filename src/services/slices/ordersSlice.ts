import { getOrdersApi, getOrderByNumberApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

type OrdersState = {
  data: TOrder[];
  ordersByNumber: TOrder[];
};

export const orderInitialState: OrdersState = {
  data: [],
  ordersByNumber: []
};

export const fetchOrders = createAsyncThunk('fetchOrders', getOrdersApi);

export const fetchOrderByNumber = createAsyncThunk(
  'fetchOrderByNumber',
  getOrderByNumberApi
);

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: orderInitialState,
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
      .addCase(fetchOrderByNumber.fulfilled, (state, action) => {
        state.ordersByNumber = action.payload.orders;
      });
  }
});

export const { ordersDataSelector, ordersByNumberSelector } =
  ordersSlice.selectors;
export const ordersReducer = ordersSlice.reducer;
