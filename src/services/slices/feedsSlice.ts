import { getFeedsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrdersData } from '@utils-types';

type FeedsState = {
  data: TOrdersData | null;
};

export const feedsInitialState: FeedsState = { data: null };

export const fetchFeeds = createAsyncThunk('fetchFeeds', getFeedsApi);

export const feedsSlice = createSlice({
  name: 'feeds',
  initialState: feedsInitialState,
  reducers: {},
  selectors: {
    feedsDataSelector: (state) => state.data
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFeeds.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  }
});

export const { feedsDataSelector } = feedsSlice.selectors;
export const feedsReducer = feedsSlice.reducer;
