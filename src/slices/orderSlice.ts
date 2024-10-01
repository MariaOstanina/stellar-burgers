import { getIngredientsApi } from '@api';
import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {},
  reducers: {
    updateOrder: (state, action) => {
      state = { ...state, ...action.payload };
    }
  }
});

export const { updateOrder } = orderSlice.actions;
