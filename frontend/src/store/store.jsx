// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from './ProductSlice'

export const store = configureStore({
  reducer: {
    product: productReducer, // Add product slice to the store
  },
});
