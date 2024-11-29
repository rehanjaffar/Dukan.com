// src/features/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/product/show");
    return response.data.products; // Return only the products array
  }
);

export const deleteProduct = createAsyncThunk("product/deleteProduct", async (id, { dispatch }) => {
  await axios.delete(`http://localhost:5000/product/delete/${id}`);
  dispatch(fetchProducts()); // Re-fetch products after deletion
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload; // Store products in the state
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

