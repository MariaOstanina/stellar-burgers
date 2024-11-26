import { createSlice } from '@reduxjs/toolkit';
import { TConstructorIngredient } from '../../utils/types';

type BurgerConstructorState = {
  bun?: TConstructorIngredient;
  ingredients: TConstructorIngredient[];
};

const initialState: BurgerConstructorState = { ingredients: [] };

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    addIngredient(state, action) {
      if (action.payload.type === 'bun') {
        state.bun = action.payload;
      } else {
        state.ingredients.push(action.payload);
      }
    },
    deleteIngredient(state, action) {
      state.ingredients.splice(action.payload, 1);
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

export const { burgerConstructorSelector } = burgerConstructorSlice.selectors;
export const { addIngredient, deleteIngredient, resetBurgerConstructor } =
  burgerConstructorSlice.actions;
