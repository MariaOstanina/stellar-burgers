import { expect, test, describe } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import { fetchFeeds, feedsReducer } from '../feedsSlice';

const setupStore = () =>
  configureStore({
    reducer: {
      feeds: feedsReducer
    }
  });

describe('feedSlice', () => {
  test('fetchFeeds', () => {
    const mockedPayload = {
      orders: {
        _id: '660e7df397ede0001d0643df',
        ingredients: [
          '643d69a5c3f7b9001cfa0943',
          '643d69a5c3f7b9001cfa093d',
          '643d69a5c3f7b9001cfa093d'
        ],
        status: 'done',
        name: 'Space флюоресцентный бургер',
        createdAt: '2024-04-04T10:16:19.376Z',
        updatedAt: '2024-04-04T10:16:19.994Z',
        number: 37593
      },
      total: 37601,
      totalToday: 45
    };
    const store = setupStore();
    store.dispatch({
      type: fetchFeeds.fulfilled.type,
      payload: mockedPayload
    });
    const state = store.getState();
    expect(state.feeds.data?.orders).toEqual(mockedPayload.orders);
    expect(state.feeds.data?.total).toBe(mockedPayload.total);
    expect(state.feeds.data?.totalToday).toBe(mockedPayload.totalToday);
  });
});
