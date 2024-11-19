import { getIngredientsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';
import { RootState } from '@store';

type IngredientsState = {
  data: null | TIngredient[];
};

const initialState: IngredientsState = { data: [] };

export const fetchIngredients = createAsyncThunk(
  'fetchIngredients',
  async () => await getIngredientsApi()
);

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    // setIngredients: (state, action) => {
    //   state.data = action.payload;
    // }
  },
  selectors: {
    ingredientsDataSelector: (state) => state.data
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIngredients.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  }
});

export const { ingredientsDataSelector } = ingredientsSlice.selectors;
export const rr = ingredientsSlice.reducer;
