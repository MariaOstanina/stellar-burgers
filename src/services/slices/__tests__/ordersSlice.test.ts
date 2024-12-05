import { expect, test, describe } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import { fetchOrders, fetchOrderByNumber, ordersReducer } from '../ordersSlice';
import { TOrder } from '@utils-types';

const setupStore = () =>
  configureStore({
    reducer: {
      orders: ordersReducer
    }
  });

describe('orderSlice', () => {
  const mockedOrders: TOrder[] = [
    {
      _id: '660e81bb97ede0001d0643eb',
      ingredients: [
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d'
      ],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2024-04-04T10:32:27.595Z',
      updatedAt: '2024-04-04T10:32:28.181Z',
      number: 37596
    }
  ];

  test('fetchOrders', () => {
    const store = setupStore();
    store.dispatch({
      type: fetchOrders.fulfilled.type,
      payload: mockedOrders
    });
    const state = store.getState();
    expect(state.orders.data).toEqual(mockedOrders);
  });

  test('fetchOrderByNumber', () => {
    const store = setupStore();
    store.dispatch({
      type: fetchOrderByNumber.fulfilled.type,
      payload: { orders: mockedOrders }
    });
    const state = store.getState();
    expect(state.orders.ordersByNumber).toEqual(mockedOrders);
  });
});
