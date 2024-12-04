import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient } from '../../utils/types';
import { v4 as uuidv4 } from 'uuid';

type BurgerConstructorState = {
  bun?: TConstructorIngredient;
  ingredients: TConstructorIngredient[];
};

const initialState: BurgerConstructorState = { ingredients: [] };

export const burgerConstructorSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
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
