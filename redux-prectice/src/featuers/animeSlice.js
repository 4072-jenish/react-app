// src/features/animeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const animeSlice = createSlice({
  name: 'anime',
  initialState: [],
  reducers: {
    addAnime: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addAnime } = animeSlice.actions;
export default animeSlice.reducer;
