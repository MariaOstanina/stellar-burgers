import { expect, test, describe } from '@jest/globals';
import {
  addIngredient,
  deleteIngredient,
  TBurgerConstructorState,
  burgerConstructorReducer
} from '../burgerConstructorSlice';
import { v4 } from 'uuid';
import { TConstructorIngredient } from '@utils-types';

jest.mock('uuid', () => ({ v4: jest.fn(() => 'mockedID') }));

describe('burgerConstructorSlice', () => {
  const state: TBurgerConstructorState = {
    bun: {
      _id: '643d69a5c3f7b9001cfa093c',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
      id: '0'
    },
    ingredients: [
      {
        _id: '643d69a5c3f7b9001cfa0942',
        name: 'Соус Spicy-X',
        type: 'sauce',
        proteins: 30,
        fat: 20,
        carbohydrates: 40,
        calories: 30,
        price: 90,
        image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
        id: '1'
      },
      {
        _id: '643d69a5c3f7b9001cfa0941',
        name: 'Биокотлета из марсианской Магнолии',
        type: 'main',
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: 'https://code.s3.yandex.net/react/code/meat-01.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
        id: '2'
      }
    ]
  };

  test('Добавление ингредиента', () => {
    const ingredient: TConstructorIngredient = {
      _id: '643d69a5c3f7b9001cfa093e',
      name: 'Филе Люминесцентного тетраодонтимформа',
      type: 'main',
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: 'https://code.s3.yandex.net/react/code/meat-03.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
      id: 'mockedID'
    };
    const preparedState: TBurgerConstructorState = JSON.parse(
      JSON.stringify(state)
    );
    preparedState.ingredients.push(ingredient);

    const newState = burgerConstructorReducer(state, addIngredient(ingredient));

    expect(v4).toHaveBeenCalled();
    expect(newState).toEqual(preparedState);
  });

  test('Удаление ингредиента', () => {
    const ingredientId = '1';
    const preparedState: TBurgerConstructorState = JSON.parse(
      JSON.stringify(state)
    );
    preparedState.ingredients = preparedState.ingredients.filter(
      (ingredient: TConstructorIngredient) => ingredient.id != ingredientId
    );

    const newState = burgerConstructorReducer(
      state,
      deleteIngredient(ingredientId)
    );

    expect(newState).toEqual(preparedState);
  });
});
