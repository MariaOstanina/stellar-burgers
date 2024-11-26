import { getFeedsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder, TOrdersData } from '@utils-types';

type FeedsState = {
  data: TOrdersData | null;
};

const initialState: FeedsState = { data: null };

export const fetchFeeds = createAsyncThunk(
  'fetchFeeds',
  async () => await getFeedsApi()
);

export const feedsSlice = createSlice({
  name: 'feeds',
  initialState,
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
