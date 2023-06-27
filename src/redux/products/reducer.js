import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "../services/productsService";

export const getProducts = createAsyncThunk(
  "GET_PRODUCTS",
  async (currentPage, thunkAPI) => {
    try {
      return await productsService.getProducts(currentPage);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    isError: false,
    isLoading: false,
    message: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.products = null;
    });
  },
});

export default productsSlice.reducer;
