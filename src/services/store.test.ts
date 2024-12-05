import { expect, test, describe } from '@jest/globals';
import { rootReducer } from '@store';
import {
  userInitialState,
  orderInitialState,
  ingredientsInitialState,
  feedsInitialState,
  burgerConstructorInitialState
} from '@slices';

describe('rootReducer', () => {
  const initialState = {
    user: userInitialState,
    feeds: feedsInitialState,
    orders: orderInitialState,
    ingredients: ingredientsInitialState,
    burgerConstructor: burgerConstructorInitialState
  };

  test('Инициализация стейта', () => {
    const newState = rootReducer(undefined, { type: 'UNKNOWN_ACTION' });
    expect(newState).toEqual(initialState);
  });
});
