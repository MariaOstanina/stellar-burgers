import { getIngredientsApi } from '@api';
import { createSlice } from '@reduxjs/toolkit';

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: { data: [] },
  reducers: {
    setIngredients: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setIngredients } = ingredientsSlice.actions;

export const fetchIngredients = () => async (dispatch) => {
  // dispatch(usersLoading());
  const data = await getIngredientsApi();
  dispatch(setIngredients(data));
};
