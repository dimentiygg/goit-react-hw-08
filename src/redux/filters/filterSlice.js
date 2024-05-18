import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../constants';

const slice = createSlice({
  name: 'filters',
  initialState: initialState.filters,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default slice.reducer;

export const { changeFilter } = slice.actions;
