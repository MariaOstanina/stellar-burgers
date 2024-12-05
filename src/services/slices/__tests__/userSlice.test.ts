import { expect, test, describe } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import {
  loginUser,
  regUser,
  logOut,
  updateUser,
  getUser,
  userReducer
} from '../userSlice';

const setupStore = () =>
  configureStore({
    reducer: {
      user: userReducer
    }
  });

describe('userSlice', () => {
  describe('loginUser', () => {
    test('pending', () => {
      const store = setupStore();
      store.dispatch({ type: loginUser.pending.type });
      const state = store.getState();
      expect(state.user.isLoading).toBeTruthy();
      expect(state.user.error).toBeNull();
    });
    test('rejected', () => {
      const store = setupStore();
      const error = 'mocked error';
      store.dispatch({
        type: loginUser.rejected.type,
        error: { message: error }
      });
      const state = store.getState();
      expect(state.user.isLoading).toBeFalsy();
      expect(state.user.error).toBe(error);
    });
    test('fulfilled', () => {
      const mockedPayload = {
        accessToken:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjBhMDAyOTdlZGUwMDAxZDA2MDg1NCIsImlhdCI6MTcxMjIyODc2MywiZXhwIjoxNzEyMjI5OTYzfQ.NnIdUkIZ8gHHicj86d2Xrxxz5wxTqJyghFfyU9ZQ6E0',
        refreshToken:
          'cae7fbb0ce188f2c244e611b328ae4869b892902b1ba10c81cee99194854b1d3c192e0bfc9b90b06',
        user: {
          email: 'lleksiv@gmail.com',
          name: 'Georg Shakillow'
        }
      };
      const store = setupStore();
      store.dispatch({
        type: loginUser.fulfilled.type,
        payload: mockedPayload
      });
      const state = store.getState();
      expect(state.user.isLoading).toBeFalsy();
      expect(state.user.error).toBeNull();
      expect(state.user.data).toEqual(mockedPayload.user);
      expect(state.user.isAuth).toBeTruthy();
    });
  });

  describe('regUser', () => {
    test('pending', () => {
      const store = setupStore();
      store.dispatch({ type: regUser.pending.type });
      const state = store.getState();
      expect(state.user.isLoading).toBeTruthy();
      expect(state.user.error).toBeNull();
    });
    test('rejected', () => {
      const store = setupStore();
      const error = 'mocked error';
      store.dispatch({
        type: regUser.rejected.type,
        error: { message: error }
      });
      const state = store.getState();
      expect(state.user.isLoading).toBeFalsy();
      expect(state.user.error).toBe(error);
    });
    test('fulfilled', () => {
      const mockedPayload = {
        accessToken:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjBhMDAyOTdlZGUwMDAxZDA2MDg1NCIsImlhdCI6MTcxMjIyODc2MywiZXhwIjoxNzEyMjI5OTYzfQ.NnIdUkIZ8gHHicj86d2Xrxxz5wxTqJyghFfyU9ZQ6E0',
        refreshToken:
          'cae7fbb0ce188f2c244e611b328ae4869b892902b1ba10c81cee99194854b1d3c192e0bfc9b90b06',
        user: {
          email: 'lleksiv@gmail.com',
          name: 'Georg Shakillow'
        }
      };
      const store = setupStore();
      store.dispatch({
        type: regUser.fulfilled.type,
        payload: mockedPayload
      });
      const state = store.getState();
      expect(state.user.isLoading).toBeFalsy();
      expect(state.user.error).toBeNull();
      expect(state.user.data).toEqual(mockedPayload.user);
      expect(state.user.isAuth).toBeTruthy();
    });
  });

  describe('logOut', () => {
    test('pending', () => {
      const store = setupStore();
      store.dispatch({ type: logOut.pending.type });
      const state = store.getState();
      expect(state.user.isLoading).toBeTruthy();
      expect(state.user.error).toBeNull();
    });
    test('rejected', () => {
      const store = setupStore();
      const error = 'mocked error';
      store.dispatch({
        type: logOut.rejected.type,
        error: { message: error }
      });
      const state = store.getState();
      expect(state.user.isLoading).toBeFalsy();
      expect(state.user.error).toBe(error);
    });
    test('fulfilled', () => {
      const mockedPayload = {
        message: 'Successful logout'
      };
      const store = setupStore();
      store.dispatch({
        type: logOut.fulfilled.type,
        payload: mockedPayload
      });
      const state = store.getState();
      expect(state.user.isLoading).toBeFalsy();
      expect(state.user.error).toBeNull();
      expect(state.user.data).toBeNull();
      expect(state.user.isAuth).toBeFalsy();
    });
  });

  describe('updateUser', () => {
    test('pending', () => {
      const store = setupStore();
      store.dispatch({ type: updateUser.pending.type });
      const state = store.getState();
      expect(state.user.isLoading).toBeTruthy();
      expect(state.user.error).toBeNull();
    });
    test('rejected', () => {
      const store = setupStore();
      const error = 'mocked error';
      store.dispatch({
        type: updateUser.rejected.type,
        error: { message: error }
      });
      const state = store.getState();
      expect(state.user.isLoading).toBeFalsy();
      expect(state.user.error).toBe(error);
    });
    test('fulfilled', () => {
      const mockedPayload = {
        user: {
          email: 'lleksiv@gmail.com',
          name: 'Georg Shakillow'
        }
      };
      const store = setupStore();
      store.dispatch({
        type: updateUser.fulfilled.type,
        payload: mockedPayload
      });
      const state = store.getState();
      expect(state.user.isLoading).toBeFalsy();
      expect(state.user.error).toBeNull();
      expect(state.user.data).toEqual(mockedPayload.user);
      expect(state.user.isAuth).toBeTruthy();
    });
  });

  describe('getUser', () => {
    test('pending', () => {
      const store = setupStore();
      store.dispatch({ type: getUser.pending.type });
      const state = store.getState();
      expect(state.user.isLoading).toBeTruthy();
      expect(state.user.error).toBeNull();
    });
    test('rejected', () => {
      const store = setupStore();
      const error = 'mocked error';
      store.dispatch({
        type: getUser.rejected.type,
        error: { message: error }
      });
      const state = store.getState();
      expect(state.user.isLoading).toBeFalsy();
      expect(state.user.error).toBe(error);
    });
    test('fulfilled', () => {
      const mockedPayload = {
        user: {
          email: 'lleksiv@gmail.com',
          name: 'Georg Shakillow'
        }
      };
      const store = setupStore();
      store.dispatch({
        type: getUser.fulfilled.type,
        payload: mockedPayload
      });
      const state = store.getState();
      expect(state.user.isLoading).toBeFalsy();
      expect(state.user.error).toBeNull();
      expect(state.user.data).toEqual(mockedPayload.user);
      expect(state.user.isAuth).toBeTruthy();
    });
  });
});
