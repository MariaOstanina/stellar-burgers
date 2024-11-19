import { createSlice } from '@reduxjs/toolkit';
import { ingredientsDataSelector } from '@slices';
import { useSelector } from 'react-redux';

type OrderState = {
  data: null | string[];
};

//const ingredients = useSelector(ingredientsDataSelector);

const initialState: OrderState = { data: ["643d69a5c3f7b9001cfa0949", "643d69a5c3f7b9001cfa094a"] };

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {}
})
