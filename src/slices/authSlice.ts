import { registerUserApi, TRegisterData } from '@api';
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: {} },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = authSlice.actions;

export const registry = (data: TRegisterData) => async (dispatch) => {
  const data = await registerUserApi();
  dispatch(setIngredients(data));
};
