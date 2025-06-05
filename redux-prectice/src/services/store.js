// src/services/store.js
import { configureStore } from '@reduxjs/toolkit';
import animeReducer from '../features/animeSlice';

const store = configureStore({
  reducer: {
    anime: animeReducer,
  },
  devTools: true,
});

export default store;
