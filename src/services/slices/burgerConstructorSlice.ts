import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient } from '@utils-types';
import { v4 as uuidv4 } from 'uuid';

export type TBurgerConstructorState = {
  bun?: TConstructorIngredient;
  ingredients: TConstructorIngredient[];
};

export const burgerConstructorInitialState: TBurgerConstructorState = {
  ingredients: []
};

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState: burgerConstructorInitialState,
  reducers: {
    addIngredient: {
      reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
        if (action.payload.type === 'bun') {
          state.bun = action.payload;
        } else {
          state.ingredients.push(action.payload);
        }
      },
      prepare: (ingredient: TIngredient) => ({
        payload: { ...ingredient, id: uuidv4() }
      })
    },
    deleteIngredient(state, action) {
      state.ingredients = state.ingredients.filter(
        ({ id }) => id !== action.payload
      );
    },
    resetBurgerConstructor(state) {
      state.bun = undefined;
      state.ingredients = [];
    }
  },
  selectors: {
    burgerConstructorSelector: (state) => state
  }
});

export const burgerConstructorReducer = burgerConstructorSlice.reducer;
export const { burgerConstructorSelector } = burgerConstructorSlice.selectors;
export const { addIngredient, deleteIngredient, resetBurgerConstructor } =
  burgerConstructorSlice.actions;
