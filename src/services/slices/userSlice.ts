import {
  loginUserApi,
  registerUserApi,
  getUserApi,
  logoutApi,
  updateUserApi
} from '@api';
import { TUser } from '@utils-types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setCookie, deleteCookie } from '../../utils/cookie';

export type TUserState = {
  isAuth: boolean;
  data: TUser | null;
  error: string | null;
  isLoading: boolean;
};

const initialState: TUserState = {
  isAuth: false,
  data: null,
  error: null,
  isLoading: true
};

export const loginUser = createAsyncThunk('loginUser', loginUserApi);
export const regUser = createAsyncThunk('regUser', registerUserApi);
export const logOut = createAsyncThunk('logOut', logoutApi);
export const updateUser = createAsyncThunk('updateUser', updateUserApi);
export const getUser = createAsyncThunk('getUser', getUserApi);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  selectors: {
    userIsAuthSelector: (state) => state.isAuth,
    userDataSelector: (state) => state.data,
    userErrorSelector: (state) => state.error,
    userIsLoadingSelector: (state) => state.isLoading
  },
  extraReducers: (builder) => {
    builder
      // loginUser
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message as string;
        state.data = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.data = payload.user;
        state.isAuth = true;
        setCookie('accessToken', payload.accessToken);
        localStorage.setItem('refreshToken', payload.refreshToken);
      })

      // regUser
      .addCase(regUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(regUser.rejected, (state, { error }) => {
        state.error = error.message as string;
        state.data = null;
      })
      .addCase(regUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.data = payload.user;
        state.isAuth = true;
        setCookie('accessToken', payload.accessToken);
        localStorage.setItem('refreshToken', payload.refreshToken);
      })

      // getUser
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, { error }) => {
        state.isLoading = false;
        // state.error = error.message as string;
        state.isAuth = false;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.user;
        state.isAuth = true;
      })

      // logOut
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = false;
        state.data = null;
        state.error = null;
        deleteCookie('accessToken');
        localStorage.removeItem('refreshToken');
      })

      // updateUser
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, { error }) => {
        state.error = error.message as string;
        state.data = null;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.data = payload.user;
        state.isAuth = true;
      });
  }
});

export const {
  userIsAuthSelector,
  userDataSelector,
  userErrorSelector,
  userIsLoadingSelector
} = userSlice.selectors;
